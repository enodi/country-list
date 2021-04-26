import axios from 'axios';

export const searchCountryByName = async (name: string) => {
    try {
        const response = await axios.get(
            `https://restcountries.eu/rest/v2/name/${name}`
        );
        if (response.status === 200) return response.data;
    } catch (error) {
        return error;
    }
};

export const currencyConverter = async (code: string, amount = '1') => {
    try {
        const response = await axios.get(
            `http://data.fixer.io/api/convert?access_key=b9a071c8d1628b100d0517128a694ff5&from=SEK&to=${code}&amount=${amount}`
        );
        if (response.data.success) return response.data.result;
    } catch (error) {
        return error;
    }
};
