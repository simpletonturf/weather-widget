import React from "react";
import ReactDOM from "react-dom";
import Home from "./../home";
import DayCard from "../../weatherComponents/dayCard/dayCard";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
    const div=document.createElement("div");
    ReactDOM.render(<DayCard/>, div)
})

it("renders without crashing", () => {
    const div=document.createElement("div");
    ReactDOM.render(<Home/>, div)
})

it("renders card correctly", () =>{
    const {getByTestId}=render(<DayCard
        date="2020-11-10"
        icon="hr"
        maxtemp="23"
        mintemp="15"
        humid="75"
        system="metric" 
    />)
    expect(getByTestId("day_test")).toHaveTextContent("Today");
    expect(getByTestId("temp_humidity")).toHaveTextContent("75%");
})


it("renders card correctly", () =>{
    const {getByTestId}=render(<DayCard
        date="2020-11-11"
        icon="hr"
        maxtemp="24"
        mintemp="20"
        humid="82"
        system="imperial" 
    />)
    expect(getByTestId("day_test")).toHaveTextContent("Wednesday");
    expect(getByTestId("temp_humidity")).toHaveTextContent("82%");
})

it("matches snapshot", ()=>{
    const tree= renderer.create(<DayCard
        date="2020-11-10"
        icon="hr"
        maxtemp="23"
        mintemp="15"
        humid="75"
        system="metric" 
    />).toJSON();
    expect(tree).toMatchSnapshot();
})






