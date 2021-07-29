import Button from "./index";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  render(<Button variant="numerical" label="1" />);
});

it("renders button correctly", () => {
  render(<Button label="1" />);
  expect(screen.getByRole("button")).toHaveTextContent("1");
});

it("matches screenshot", () => {
  const file = renderer.create(<Button label="1" />).toJSON();
  expect(file).toMatchSnapshot();
});
