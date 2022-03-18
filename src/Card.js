import * as React from "react";

const SvgCard = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 212.124 281.138"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <filter
        id="card_svg__a"
        x={127.638}
        y={28.878}
        width={39.242}
        height={33.621}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={3} result="blur" />
        <feFlood floodColor="#455a64" floodOpacity={0.149} />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g data-name="Group 2988">
      <path
        data-name="Path 6963"
        d="M3.689 142.388 23.406 68.56a13.839 13.839 0 0 1 16.957-9.825l133.707 35.99a13.902 13.902 0 0 1 9.787 17.022l-19.718 73.827a13.839 13.839 0 0 1-16.956 9.824L13.475 159.41a13.902 13.902 0 0 1-9.786-17.022Zm0 0"
      />
      <path
        data-name="Path 6930"
        d="m199.829 137.417-36.345-36.409v145.9h48.634v-79.929a41.692 41.692 0 0 0-12.289-29.562Zm0 0"
      />
      <path
        data-name="Path 6931"
        d="M39.661 221.009 12.297 149.69a13.911 13.911 0 0 1 7.941-17.96l129.157-49.947a13.821 13.821 0 0 1 17.888 7.973l27.364 71.319a13.911 13.911 0 0 1-7.941 17.96L57.552 228.982a13.828 13.828 0 0 1-17.891-7.973Zm0 0"
      />
      <path
        data-name="Path 6932"
        d="M177.117 114.934 22.331 175.199l10.3 26.874 154.8-60.237Zm0 0"
      />
      <path
        data-name="Path 6933"
        d="M11.366 171.17V94.748a13.9 13.9 0 0 1 13.9-13.9H164.22a13.9 13.9 0 0 1 13.9 13.9v76.422a13.9 13.9 0 0 1-13.9 13.9H25.266a13.9 13.9 0 0 1-13.9-13.9Zm0 0"
      />
      <path
        data-name="Path 6945"
        d="M149.594 246.399h62.53v34.738h-62.53Zm0 0"
      />
      <path
        data-name="Path 6946"
        d="M139.398 142.758a15.059 15.059 0 0 0-21.746 20.825l28.468 31.057a46.851 46.851 0 0 0 .948 48.067l2.526 4.04h45.16v-48.632Zm0 0"
      />
      <path
        data-name="Path 6947"
        d="M160.178 256.821h6.948v6.948h-6.948Zm0 0"
      />
      <path
        data-name="Path 6951"
        d="M191.28 198.249a3.467 3.467 0 0 1-2.456-1.021l-13.9-13.9a3.474 3.474 0 0 1 4.912-4.913l13.9 13.9a3.475 3.475 0 0 1-2.457 5.931Zm0 0"
      />
      <path
        data-name="Path 6934"
        d="M163.807 80.848h-14.764L44.826 185.065h118.981a13.9 13.9 0 0 0 13.9-13.9V94.748a13.9 13.9 0 0 0-13.9-13.9Zm0 0"
      />
      <path data-name="Path 6935" d="M25.266 135.989h13.9v6.948h-13.9Zm0 0" />
      <path data-name="Path 6936" d="M25.266 156.719h13.9v6.948h-13.9Zm0 0" />
      <path data-name="Path 6937" d="M87.473 156.719h13.9v6.948h-13.9Zm0 0" />
      <path data-name="Path 6938" d="M45.94 135.989h13.894v6.948H45.94Zm0 0" />
      <path data-name="Path 6939" d="M66.706 135.989h13.9v6.948h-13.9Zm0 0" />
      <path data-name="Path 6940" d="M87.473 135.989h13.9v6.948h-13.9Zm0 0" />
      <path
        data-name="Path 6941"
        d="M153.253 94.526h6.948v10.422h-6.948Zm0 0"
      />
      <path
        data-name="Path 6942"
        d="M139.406 94.526h6.944v10.422h-6.948Zm0 0"
      />
      <path data-name="Path 6943" d="M125.56 94.526h6.948v10.422h-6.948Zm0 0" />
      <path
        data-name="Path 6944"
        d="M111.711 94.526h6.947v10.422h-6.947Zm0 0"
      />
      <path
        data-name="Path 6948"
        d="M25.266 116.74v-16.675a5.557 5.557 0 0 1 5.559-5.559h16.674a5.556 5.556 0 0 1 5.557 5.559v16.675a5.556 5.556 0 0 1-5.557 5.559H30.825a5.557 5.557 0 0 1-5.559-5.559Zm0 0"
      />
      <path data-name="Path 6949" d="M25.266 104.894h10.422v6.95H25.266Zm0 0" />
      <path data-name="Path 6950" d="M42.482 104.894h10.42v6.95h-10.42Zm0 0" />
      <g data-name="Group 1889" transform="translate(106)">
        <rect
          data-name="Rectangle 1135"
          width={60.76}
          height={60.76}
          rx={20}
          transform="rotate(-30 56.69 15.19)"
        />
        <rect
          data-name="Rectangle 1136"
          width={34.716}
          height={34.716}
          rx={10}
          transform="rotate(-30 75.318 -15.57)"
        />
        <g transform="translate(-106)" filter="url(#card_svg__a)">
          <path
            data-name="Path 6929"
            d="m155.76 36-11.687 12-5.313-5.455"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgCard;
