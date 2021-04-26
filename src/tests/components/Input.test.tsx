import React from "react";
import { shallow } from "enzyme";

import Input from "../../components/Input";

describe("Input Component", () => {
    let wrapper: any, handleOnChange: () => void;
    beforeEach(() => {
        handleOnChange = jest.fn();
        wrapper = shallow(
            <Input
                placeholder="Search"
                handleOnChange={handleOnChange}
                type="text"
            />
        );
    });

    it("should render Input component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should call handleOnChange on input change", () => {
        wrapper.find("input").simulate("change");
        expect(handleOnChange).toHaveBeenCalled();
    });
});
