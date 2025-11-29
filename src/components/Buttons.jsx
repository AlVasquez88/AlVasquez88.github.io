// src/components/Buttons.jsx
import React from "react";
import "../styles/buttons.css";

export function PrimaryButton({ href, children }) {
  return (
    <a href={href} className="btn btn-primary">
      {children}
    </a>
  );
}

