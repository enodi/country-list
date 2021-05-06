import React, { useState } from "react";

import Table from "../components/Table";
import Input from "../components/Input";
import Button from "../components/Button";
import {
    searchCountryByName,
    currencyConverter,
} from "../actions/search-countries";
import {
    COUNTRY,
    CURRENCY,
    COUNTRY_DETAIL,
    CURRENCY_DATA,
} from "../models/country.model";

const Dashboard = () => {
    const [countries, setCountries] = useState<any[]>([]);
    const [country, setCountry] = useState<string>("");
    const [swedishAmount, setSwedishAmount] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleCountryChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCountry(event.target.value);
    };

    const displayCountryDetails = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setLoading(true);

        let countriesInfo: any[] = [];
        const response: COUNTRY[] = await searchCountryByName(country);

        if (response.length > 0) {
            countriesInfo = await Promise.all(
                response.map(async (country: COUNTRY) =>
                    getCountryDetails(country)
                )
            );
        }

        setCountries(countriesInfo);
        setLoading(false);
    };

    const handleCurrencyChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSwedishAmount(event.target.value);
    };

    const updateLocalCurrency = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setLoading(true);

        const countriesInfo = await Promise.all(
            countries.map(async (country: COUNTRY_DETAIL) =>
                updateCountryDetails(country)
            )
        );

        setCountries(countriesInfo);
        setLoading(false);
    };

    const localCurrencyConverter = async (code: string, amount?: string) => {
        const response = await currencyConverter(code, amount);
        return response;
    };

    const getCountryDetails = async (country: COUNTRY) => {
        return {
            name: country.name,
            capital: country.capital,
            population: country.population,
            flag: country.flag,
            currencyData: await Promise.all(
                country.currencies.map(async (currency: CURRENCY) => {
                    if (currency.code !== null || currency.code !== "(none)") {
                        return {
                            currency: currency.code,
                            symbol: currency.symbol,
                            currencyAmount: await localCurrencyConverter(
                                currency.code
                            ),
                        };
                    }
                })
            ),
        };
    };

    const updateCountryDetails = async (country: COUNTRY_DETAIL) => {
        return {
            name: country.name,
            capital: country.capital,
            population: country.population,
            flag: country.flag,
            currencyData: await Promise.all(
                country.currencyData.map(async (currency: CURRENCY_DATA) => {
                    return {
                        currency: currency.currency,
                        symbol: currency.symbol,
                        currencyAmount: await localCurrencyConverter(
                            currency.currency,
                            swedishAmount
                        ),
                    };
                })
            ),
        };
    };

    return (
        <main className="dashboard">
            <h2 className="dashboard__title">Search for any country</h2>
            <section className="dashboard__button-section">
                <form onSubmit={displayCountryDetails}>
                    <Input
                        type="text"
                        placeholder="Search for a country"
                        handleOnChange={handleCountryChange}
                    />
                    <Button title="Search" />
                </form>

                <form onSubmit={updateLocalCurrency}>
                    <Input
                        type="number"
                        placeholder="Enter an amount in SEK"
                        handleOnChange={handleCurrencyChange}
                    />
                    <Button title="Convert" />
                </form>
            </section>
            <Table loading={loading} countries={countries} />
        </main>
    );
};

export default Dashboard;
