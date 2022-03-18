import * as React from "react";

const SvgAddIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 133 133"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <filter
        id="addIcon_svg__a"
        x={0}
        y={0}
        width={133}
        height={133}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={10} />
        <feGaussianBlur stdDeviation={15} result="b" />
        <feFlood floodColor="#004cff" floodOpacity={0.102} />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
      <style>
        {
          ".addIcon_svg__b{fill:none;stroke:#000;stroke-linecap:round;stroke-width:2.2px}"
        }
      </style>
    </defs>
    <g
      style={{
        filter: "url(#addIcon_svg__a)",
      }}
    >
      <circle
        cx={21.5}
        cy={21.5}
        r={21.5}
        transform="translate(45 35)"
        style={{
          fill: "#000",
        }}
      />
    </g>
    <path className="addIcon_svg__b" d="M66 47v19M76 57H57" />
  </svg>
);

export default SvgAddIcon;
