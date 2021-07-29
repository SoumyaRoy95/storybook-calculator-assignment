import Screen from "./index";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  render(<Screen input="0" />);
});

it("renders screen correctly", () => {
  render(<Screen input="1+1" />);
  expect(screen.getByText("1+1")).toBeInTheDocument();
});

it("matches screenshot", () => {
  const file = renderer.create(<Screen input="1" />).toJSON();
  expect(file).toMatchSnapshot();
});
