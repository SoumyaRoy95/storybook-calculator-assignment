import ClearButton from "./index";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  render(<ClearButton label="clear" />);
});

it("renders button correctly", () => {
  render(<ClearButton label="clear" />);
  expect(screen.getByRole("button")).toHaveTextContent("clear");
});

it("matches screenshot", () => {
  const file = renderer.create(<ClearButton label="clear" />).toJSON();
  expect(file).toMatchSnapshot();
});
