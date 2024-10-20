import React from "react";

import s from "./styles.module.css";

const Button = ({
  variant = "primary",
  children,
}: {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) => (
  <button className={variant === "primary" ? s.primary : s.secondary}>
    {children}
  </button>
);

export default Button;
