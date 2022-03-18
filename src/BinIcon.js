import * as React from "react";

const SvgBinIcon = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 30 30"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <filter
        id="bin-icon_svg__a"
        x={4.439}
        y={7.494}
        width={20.524}
        height={20.706}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={2} result="b" />
        <feFlood floodColor="#455a64" floodOpacity={0.102} />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
      <style>{".bin-icon_svg__b{fill:#000}"}</style>
    </defs>
    <circle
      cx={15}
      cy={15}
      r={15}
      style={{
        fill: "#000",
        opacity: 0.15,
      }}
    />
    <path
      className="bin-icon_svg__b"
      d="M12.999 9.53a.653.653 0 0 1 .676-.658h2.779a.653.653 0 0 1 .676.657v.72h.5v-.72a1.154 1.154 0 0 0-1.176-1.157h-2.779a1.154 1.154 0 0 0-1.176 1.158v.72h.5Zm0 0"
    />
    <path
      className="bin-icon_svg__b"
      d="M29.286 132.706h6.35a1.089 1.089 0 0 0 1.087-1.108V124H28.2v7.6a1.089 1.089 0 0 0 1.087 1.108Zm4.886-7.531a.27.27 0 0 1 .537 0v5.815a.269.269 0 0 1-.537 0Zm-1.98 0a.269.269 0 0 1 .537 0v5.815a.269.269 0 0 1-.537 0Zm-1.98 0a.269.269 0 0 1 .537 0v5.815a.269.269 0 0 1-.537 0Zm0 0"
      transform="translate(-17.763 -111.508)"
      style={{
        filter: "url(#bin-icon_svg__a)",
      }}
    />
    <path
      className="bin-icon_svg__b"
      d="M9.776 11.704h9.851c.4 0 .729-.442.729-.987s-.327-.988-.729-.988H9.776c-.4 0-.729.442-.729.987s.326.988.729.988Zm0 0"
    />
  </svg>
);

export default SvgBinIcon;
