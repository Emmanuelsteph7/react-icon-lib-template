import * as React from "react";

const SvgBellIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 21 22.004"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M17.125 21a3.128 3.128 0 0 1-6.25 0h6.25ZM12.571 3.2c2.814-.261.042-.263 2.856 0s5.1 1.27 5.1 3.659C20.529 17.563 24 17.008 24 18.5h0V21H4v-2.5c0-1.42 3.471-.938 3.471-11.647 0-2.384 2.286-3.395 5.1-3.653Z"
      transform="translate(-3.5 -2.496)"
      style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "square",
        fillRule: "evenodd",
      }}
    />
  </svg>
);

export default SvgBellIcon;
