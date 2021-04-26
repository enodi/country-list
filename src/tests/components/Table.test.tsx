import React from "react";
import { shallow } from "enzyme";

import Table from "../../components/Table";

const countryData = [
    {
        capital: "Abuja",
        currencyData: [{ currency: "NGN", currencyAmount: 45.424481 }],

        flag: "https://restcountries.eu/data/nga.svg",
        name: "Nigeria",
        population: 186988000,
    },
];

describe("Table Component", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(<Table loading={false} countries={countryData} />);
    });

    it("should render Table component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should contain td element with text", () => {
        expect(wrapper.find("td").first().text()).toEqual("Nigeria");
    });
});
