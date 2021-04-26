import React from "react";
import { shallow } from "enzyme";

import Button from "../../components/Button";

describe("Button Component", () => {
    let wrapper: any, handleClick: () => void;
    beforeEach(() => {
        handleClick = jest.fn();
        wrapper = shallow(<Button title="Search" handleClick={handleClick} />);
    });

    it("should render Button component correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should call handleClick on button click", () => {
        wrapper.find("button").simulate("click");
        expect(handleClick).toHaveBeenCalled();
    });
});
