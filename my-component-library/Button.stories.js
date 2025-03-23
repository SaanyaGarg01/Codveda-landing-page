import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button label="Primary Button" variant="primary" />;
export const Secondary = () => <Button label="Secondary Button" variant="secondary" />;
export const Danger = () => <Button label="Danger Button" variant="danger" />;
