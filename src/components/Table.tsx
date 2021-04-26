import React from "react";
import numbro from "numbro";

import { COUNTRY_DETAIL, CURRENCY_DATA } from "../models/country.model";

type TableProps = {
    loading: boolean;
    countries: COUNTRY_DETAIL[];
};

const Table: React.FunctionComponent<TableProps> = ({ loading, countries }) => {
    const renderTable = () => {
        if (loading) {
            return (
                <tr>
                    <td>
                        <div className="loader__wrapper">
                            <span className="loading__anim"></span>
                        </div>
                    </td>
                </tr>
            );
        } else if (countries.length === 0) {
            return (
                <tr>
                    <td>
                        <div className="loader__wrapper">
                            <span>No Data</span>
                        </div>
                    </td>
                </tr>
            );
        } else {
            return countries.map((country: COUNTRY_DETAIL, index: number) => (
                <tr key={`country-${index}`}>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                    <td>
                        {numbro(country.population).format({
                            thousandSeparated: true,
                        })}
                    </td>
                    {country.currencyData.map(
                        (currencies: CURRENCY_DATA, i: number) => {
                            if (currencies.currencyAmount) {
                                return (
                                    <React.Fragment
                                        key={`country-currency${i}`}
                                    >
                                        <td>{currencies.currency}</td>
                                        <td>
                                            <span className="symbol">
                                                {currencies.symbol}{" "}
                                            </span>
                                            {currencies.currencyAmount}
                                        </td>
                                    </React.Fragment>
                                );
                            }
                        }
                    )}
                    <td>
                        <img
                            src={country.flag}
                            alt="country flag"
                            className="dashboard--img-dimension"
                        />
                    </td>
                </tr>
            ));
        }
    };
    return (
        <table className="dashboard__table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Population</th>
                    <th>Currency Code</th>
                    <th>Local Currency</th>
                    <th>Flag</th>
                </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
        </table>
    );
};

export default Table;
