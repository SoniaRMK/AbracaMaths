import React from "react";
import renderer from "react-test-renderer";
import { render, screen, act } from "@testing-library/react";
import Quote from "../components/Quote";

describe("Quote", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
