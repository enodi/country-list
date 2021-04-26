export interface COUNTRY {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: CURRENCY[];
    languages: LANGUAGE[];
    translations: {
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
        br: string;
        pt: string;
        nl: string;
        hr: string;
        fa: string;
    };
    flag: string;
    regionalBlocs: REGIONAL_BLOC[];
    cioc: string;
}

export interface CURRENCY {
    code: string;
    name: string;
    symbol: string;
}

interface LANGUAGE {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface REGIONAL_BLOC {
    acronym: string;
    name: string;
    otherAcronyms: [];
    otherNames: string[];
}

export interface COUNTRY_DETAIL {
    capital: string;
    currencyData: CURRENCY_DATA[];
    flag: string;
    name: string;
    population: number;
}

export interface CURRENCY_DATA {
    currency: string;
    currencyAmount: number;
    symbol: string;
}
