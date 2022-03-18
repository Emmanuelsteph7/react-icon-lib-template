import * as React from "react";

const SvgBag = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 208.001 267"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <filter
        id="bag_svg__a"
        x={98.639}
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
    <g data-name="Group 2989">
      <g data-name="Group 1893">
        <path
          data-name="Path 6962"
          d="m126.006 87.344-36.762 7.11a14.575 14.575 0 0 0-8.419 5.136l-67.823 90.68a19.421 19.421 0 0 0 2.906 27.315L51.46 246.24l29.963 8.022Z"
        />
        <g data-name="Group 1876" fillRule="evenodd">
          <path
            data-name="Path 6954"
            d="M137.682 162.992v-.005l-.119-.119a11.345 11.345 0 0 0-.19-.19l-4.768-4.771-.677 1.347a14.912 14.912 0 0 0-5.045-.877h-.464a14.971 14.971 0 0 0-14.156 19.865l-1.4.718 4.938 4.949.062.063.066.066a14.926 14.926 0 0 0 10.488 4.3h.461a14.967 14.967 0 0 0 10.8-25.343Zm-10.8 18.43h-.463a8.066 8.066 0 1 1 0-16.131h.461a8.066 8.066 0 0 1 0 16.131Z"
          />
          <path
            data-name="Path 6955"
            d="m180.948 159.851-4.609-4.609-63.879 63.882 4.609 4.609a3.457 3.457 0 0 0 4.889 0l58.994-58.994a3.457 3.457 0 0 0-.004-4.888Z"
          />
          <path
            data-name="Path 6956"
            d="m181.854 198.456-3.813-3.866.247 1.567a14.884 14.884 0 0 0-6.242-1.368h-.461a14.971 14.971 0 0 0-13.719 20.983l-1.692-.247 4.587 4.58q.245.257.5.5l.105.105a14.923 14.923 0 0 0 10.215 4.037h.461a14.969 14.969 0 0 0 9.8-26.29Zm-9.8 19.376h-.461a8.066 8.066 0 0 1 0-16.131h.461a8.066 8.066 0 1 1 0 16.131Z"
          />
        </g>
        <path
          data-name="Path 6952"
          d="m115.917 82.645-33.66 16.4a14.57 14.57 0 0 0-6.794 7.148L33.472 211.456a19.467 19.467 0 0 0 9.89 25.666l41.767 18.507h31.018Z"
        />
        <path
          data-name="Path 6953"
          d="M208 225.981v20.279A20.951 20.951 0 0 1 187.26 267h-85.265c-11.295 0-20.279-9.45-20.279-20.74V126.89a14.914 14.914 0 0 1 3.276-9.683l25.636-31.061a15.194 15.194 0 0 1 11.646-5.806h44.706a15.2 15.2 0 0 1 11.646 5.805l25.636 31.061a15.366 15.366 0 0 1 3.737 9.683v99.091Z"
        />
        <g data-name="Group 1877">
          <path
            data-name="Path 6957"
            d="M114.9 220.284a3.457 3.457 0 0 1-2.445-5.9l58.994-58.994a3.457 3.457 0 0 1 4.889 4.888l-58.994 58.994a3.445 3.445 0 0 1-2.444 1.012Z"
          />
          <path
            data-name="Path 6958"
            d="M122.275 183.874h-.461a14.979 14.979 0 1 1 0-29.958h.461a14.979 14.979 0 0 1 0 29.958Zm-.461-23.044a8.066 8.066 0 1 0 0 16.131h.461a8.066 8.066 0 1 0 0-16.131Z"
          />
          <path
            data-name="Path 6959"
            d="M167.442 220.284h-.461a14.979 14.979 0 0 1 0-29.958h.461a14.979 14.979 0 1 1 0 29.958Zm-.461-23.044a8.066 8.066 0 0 0 0 16.131h.461a8.066 8.066 0 0 0 0-16.131Z"
          />
        </g>
        <path
          data-name="Path 6960"
          d="M152.418 114.97a3.457 3.457 0 0 1-.959-6.778c.392-.113.787-.238 1.173-.37a26.039 26.039 0 0 0 17.622-24.651V44.457a3.457 3.457 0 1 1 6.913 0v38.714a32.951 32.951 0 0 1-22.3 31.193c-.489.167-.989.324-1.485.468a3.443 3.443 0 0 1-.964.138Z"
        />
        <path
          data-name="Path 6961"
          d="M145.359 121.619a10.831 10.831 0 1 1 10.831-10.831 10.843 10.843 0 0 1-10.831 10.831Z"
        />
      </g>
      <g data-name="Group 1887" transform="translate(77.001)">
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
        <g transform="translate(-77)" filter="url(#bag_svg__a)">
          <path
            data-name="Path 6929"
            d="m126.76 36-11.687 12-5.313-5.455"
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

export default SvgBag;
