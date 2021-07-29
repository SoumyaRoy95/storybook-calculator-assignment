import React from "react";
import Button from "./index";

export default {
  title: "Button",
  component: Button,
};

export const Numeric = () => <Button variant="numerical" label="1" />;
export const Operational = () => <Button variant="operational" label="+" />;
