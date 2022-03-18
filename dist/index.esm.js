import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import * as React from 'react';

var _excluded$6 = ["title", "titleId"];

var SvgAddIcon = function SvgAddIcon(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$6);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 133 133",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "addIcon_svg__a",
    x: 0,
    y: 0,
    width: 133,
    height: 133,
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dy: 10
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: 15,
    result: "b"
  }), /*#__PURE__*/React.createElement("feFlood", {
    floodColor: "#004cff",
    floodOpacity: 0.102
  }), /*#__PURE__*/React.createElement("feComposite", {
    operator: "in",
    in2: "b"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in: "SourceGraphic"
  })), /*#__PURE__*/React.createElement("style", null, ".addIcon_svg__b{fill:none;stroke:#000;stroke-linecap:round;stroke-width:2.2px}")), /*#__PURE__*/React.createElement("g", {
    style: {
      filter: "url(#addIcon_svg__a)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 21.5,
    cy: 21.5,
    r: 21.5,
    transform: "translate(45 35)",
    style: {
      fill: "#000"
    }
  })), /*#__PURE__*/React.createElement("path", {
    className: "addIcon_svg__b",
    d: "M66 47v19M76 57H57"
  }));
};

var _excluded$5 = ["title", "titleId"];

var SvgAvatar = function SvgAvatar(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$5);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 35 35",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("style", null, ".avatar_svg__a{fill:#000}")), /*#__PURE__*/React.createElement("path", {
    className: "avatar_svg__a",
    d: "M24.227 23.543h-2.1l-1.09-.485v-1.323a7.4 7.4 0 0 0 3.346-3.853h.935a4.036 4.036 0 0 0 2.147-7.454v-.46a9.967 9.967 0 0 0-19.934 0v.46a4.036 4.036 0 0 0 2.149 7.454h.935a7.4 7.4 0 0 0 3.346 3.853v1.318l-1.1.49h-2.088A10.785 10.785 0 0 0 0 34.316.684.684 0 0 0 .684 35h13.74a.684.684 0 1 0 0-1.367H1.392a9.42 9.42 0 0 1 8.943-8.712c0 .006 0 .011-.006.017a.684.684 0 0 0 .092.572l3.234 4.754a.684.684 0 0 0 .5.3h.064a.684.684 0 0 0 .483-.2l2.791-2.791 2.791 2.791a.684.684 0 0 0 .483.2h.064a.684.684 0 0 0 .5-.3l3.234-4.754a.684.684 0 0 0 .092-.572c0-.006 0-.011-.006-.017a9.419 9.419 0 0 1 8.955 8.712h-13.03a.684.684 0 1 0 0 1.367h13.74a.684.684 0 0 0 .684-.684 10.785 10.785 0 0 0-10.773-10.773Zm-.75-12.905A7.9 7.9 0 0 1 19.635 9a.684.684 0 0 0-.84-.006 8.276 8.276 0 0 1-5.08 1.722 8.358 8.358 0 0 1-2.189-.292v-.348a5.975 5.975 0 0 1 11.949 0s0 .543 0 .562Zm1.843 5.877h-.462v-5.341h.462a2.67 2.67 0 0 1 0 5.341ZM17.5 1.367a8.609 8.609 0 0 1 8.6 8.516 4.041 4.041 0 0 0-.779-.076h-.484a7.341 7.341 0 0 0-14.673 0H9.68a4.037 4.037 0 0 0-.779.076 8.609 8.609 0 0 1 8.6-8.516Zm-7.358 15.148H9.68a2.67 2.67 0 0 1 0-5.341h.462v5.341Zm1.367-1.229v-3.455a9.737 9.737 0 0 0 2.206.252 9.623 9.623 0 0 0 5.491-1.7 9.256 9.256 0 0 0 4.286 1.633v3.305a5.966 5.966 0 0 1-.3 1.837h-3.266a2.06 2.06 0 0 0-1.939-1.373h-.915a2.056 2.056 0 0 0 0 4.112h.915a2.059 2.059 0 0 0 1.939-1.373h2.611a5.99 5.99 0 0 1-11.028-3.241Zm7.168 2.557a.69.69 0 0 1-.689.689h-.915a.689.689 0 0 1 0-1.378h.915a.69.69 0 0 1 .689.688Zm-1.177 4.8a7.334 7.334 0 0 0 2.172-.327v1.144l-2.178 2.178-2.166-2.166v-1.155a7.334 7.334 0 0 0 2.172.327Zm-3.18 6.168-2.309-3.395 2.3-1.025 2.216 2.209Zm6.347 0L18.461 26.6l2.213-2.213 2.3 1.025Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "avatar_svg__a",
    d: "M17.5 33.656a.673.673 0 1 0 .475.2.677.677 0 0 0-.475-.2Z"
  }));
};

var _excluded$4 = ["title", "titleId"];

var SvgBag = function SvgBag(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$4);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 208.001 267",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "bag_svg__a",
    x: 98.639,
    y: 28.878,
    width: 39.242,
    height: 33.621,
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: 3,
    result: "blur"
  }), /*#__PURE__*/React.createElement("feFlood", {
    floodColor: "#455a64",
    floodOpacity: 0.149
  }), /*#__PURE__*/React.createElement("feComposite", {
    operator: "in",
    in2: "blur"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in: "SourceGraphic"
  }))), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 2989"
  }, /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 1893"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6962",
    d: "m126.006 87.344-36.762 7.11a14.575 14.575 0 0 0-8.419 5.136l-67.823 90.68a19.421 19.421 0 0 0 2.906 27.315L51.46 246.24l29.963 8.022Z"
  }), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 1876",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6954",
    d: "M137.682 162.992v-.005l-.119-.119a11.345 11.345 0 0 0-.19-.19l-4.768-4.771-.677 1.347a14.912 14.912 0 0 0-5.045-.877h-.464a14.971 14.971 0 0 0-14.156 19.865l-1.4.718 4.938 4.949.062.063.066.066a14.926 14.926 0 0 0 10.488 4.3h.461a14.967 14.967 0 0 0 10.8-25.343Zm-10.8 18.43h-.463a8.066 8.066 0 1 1 0-16.131h.461a8.066 8.066 0 0 1 0 16.131Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6955",
    d: "m180.948 159.851-4.609-4.609-63.879 63.882 4.609 4.609a3.457 3.457 0 0 0 4.889 0l58.994-58.994a3.457 3.457 0 0 0-.004-4.888Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6956",
    d: "m181.854 198.456-3.813-3.866.247 1.567a14.884 14.884 0 0 0-6.242-1.368h-.461a14.971 14.971 0 0 0-13.719 20.983l-1.692-.247 4.587 4.58q.245.257.5.5l.105.105a14.923 14.923 0 0 0 10.215 4.037h.461a14.969 14.969 0 0 0 9.8-26.29Zm-9.8 19.376h-.461a8.066 8.066 0 0 1 0-16.131h.461a8.066 8.066 0 1 1 0 16.131Z"
  })), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6952",
    d: "m115.917 82.645-33.66 16.4a14.57 14.57 0 0 0-6.794 7.148L33.472 211.456a19.467 19.467 0 0 0 9.89 25.666l41.767 18.507h31.018Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6953",
    d: "M208 225.981v20.279A20.951 20.951 0 0 1 187.26 267h-85.265c-11.295 0-20.279-9.45-20.279-20.74V126.89a14.914 14.914 0 0 1 3.276-9.683l25.636-31.061a15.194 15.194 0 0 1 11.646-5.806h44.706a15.2 15.2 0 0 1 11.646 5.805l25.636 31.061a15.366 15.366 0 0 1 3.737 9.683v99.091Z"
  }), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 1877"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6957",
    d: "M114.9 220.284a3.457 3.457 0 0 1-2.445-5.9l58.994-58.994a3.457 3.457 0 0 1 4.889 4.888l-58.994 58.994a3.445 3.445 0 0 1-2.444 1.012Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6958",
    d: "M122.275 183.874h-.461a14.979 14.979 0 1 1 0-29.958h.461a14.979 14.979 0 0 1 0 29.958Zm-.461-23.044a8.066 8.066 0 1 0 0 16.131h.461a8.066 8.066 0 1 0 0-16.131Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6959",
    d: "M167.442 220.284h-.461a14.979 14.979 0 0 1 0-29.958h.461a14.979 14.979 0 1 1 0 29.958Zm-.461-23.044a8.066 8.066 0 0 0 0 16.131h.461a8.066 8.066 0 0 0 0-16.131Z"
  })), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6960",
    d: "M152.418 114.97a3.457 3.457 0 0 1-.959-6.778c.392-.113.787-.238 1.173-.37a26.039 26.039 0 0 0 17.622-24.651V44.457a3.457 3.457 0 1 1 6.913 0v38.714a32.951 32.951 0 0 1-22.3 31.193c-.489.167-.989.324-1.485.468a3.443 3.443 0 0 1-.964.138Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6961",
    d: "M145.359 121.619a10.831 10.831 0 1 1 10.831-10.831 10.843 10.843 0 0 1-10.831 10.831Z"
  })), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 1887",
    transform: "translate(77.001)"
  }, /*#__PURE__*/React.createElement("rect", {
    "data-name": "Rectangle 1135",
    width: 60.76,
    height: 60.76,
    rx: 20,
    transform: "rotate(-30 56.69 15.19)"
  }), /*#__PURE__*/React.createElement("rect", {
    "data-name": "Rectangle 1136",
    width: 34.716,
    height: 34.716,
    rx: 10,
    transform: "rotate(-30 75.318 -15.57)"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-77)",
    filter: "url(#bag_svg__a)"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6929",
    d: "m126.76 36-11.687 12-5.313-5.455",
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3
  })))));
};

var _excluded$3 = ["title", "titleId"];

var SvgBellIcon = function SvgBellIcon(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$3);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 21 22.004",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M17.125 21a3.128 3.128 0 0 1-6.25 0h6.25ZM12.571 3.2c2.814-.261.042-.263 2.856 0s5.1 1.27 5.1 3.659C20.529 17.563 24 17.008 24 18.5h0V21H4v-2.5c0-1.42 3.471-.938 3.471-11.647 0-2.384 2.286-3.395 5.1-3.653Z",
    transform: "translate(-3.5 -2.496)",
    style: {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "square",
      fillRule: "evenodd"
    }
  }));
};

var _excluded$2 = ["title", "titleId"];

var SvgBinIcon = function SvgBinIcon(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 30 30",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "bin-icon_svg__a",
    x: 4.439,
    y: 7.494,
    width: 20.524,
    height: 20.706,
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dy: 1
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: 2,
    result: "b"
  }), /*#__PURE__*/React.createElement("feFlood", {
    floodColor: "#455a64",
    floodOpacity: 0.102
  }), /*#__PURE__*/React.createElement("feComposite", {
    operator: "in",
    in2: "b"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in: "SourceGraphic"
  })), /*#__PURE__*/React.createElement("style", null, ".bin-icon_svg__b{fill:#000}")), /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 15,
    r: 15,
    style: {
      fill: "#000",
      opacity: 0.15
    }
  }), /*#__PURE__*/React.createElement("path", {
    className: "bin-icon_svg__b",
    d: "M12.999 9.53a.653.653 0 0 1 .676-.658h2.779a.653.653 0 0 1 .676.657v.72h.5v-.72a1.154 1.154 0 0 0-1.176-1.157h-2.779a1.154 1.154 0 0 0-1.176 1.158v.72h.5Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    className: "bin-icon_svg__b",
    d: "M29.286 132.706h6.35a1.089 1.089 0 0 0 1.087-1.108V124H28.2v7.6a1.089 1.089 0 0 0 1.087 1.108Zm4.886-7.531a.27.27 0 0 1 .537 0v5.815a.269.269 0 0 1-.537 0Zm-1.98 0a.269.269 0 0 1 .537 0v5.815a.269.269 0 0 1-.537 0Zm-1.98 0a.269.269 0 0 1 .537 0v5.815a.269.269 0 0 1-.537 0Zm0 0",
    transform: "translate(-17.763 -111.508)",
    style: {
      filter: "url(#bin-icon_svg__a)"
    }
  }), /*#__PURE__*/React.createElement("path", {
    className: "bin-icon_svg__b",
    d: "M9.776 11.704h9.851c.4 0 .729-.442.729-.987s-.327-.988-.729-.988H9.776c-.4 0-.729.442-.729.987s.326.988.729.988Zm0 0"
  }));
};

var _excluded$1 = ["title", "titleId"];

var SvgCamera = function SvgCamera(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 49 41",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 -44.419)"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6971",
    d: "M9.954 54.476v-7.2a1.1 1.1 0 0 0-1.1-1.1H5.169a1.1 1.1 0 0 0-1.1 1.1v7.2"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6972",
    d: "M6.739 54.476v-8.308h-1.57a1.1 1.1 0 0 0-1.1 1.1v7.2"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6973",
    d: "M49 55.607v26.52a3.272 3.272 0 0 1-3.252 3.292H3.252A3.272 3.272 0 0 1 0 82.127v-26.52a3.272 3.272 0 0 1 3.252-3.292h6.43a3.256 3.256 0 0 0 3.073-2.215l1.187-3.468a3.255 3.255 0 0 1 3.073-2.214h18.97a3.255 3.255 0 0 1 3.072 2.214l1.188 3.468a3.254 3.254 0 0 0 3.072 2.213h2.431A3.272 3.272 0 0 1 49 55.607Z"
  }), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 1911"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6974",
    d: "M5.969 85.419H3.346A3.346 3.346 0 0 1 0 82.074V55.123a3.346 3.346 0 0 1 3.346-3.346h2.416v.006a3.347 3.347 0 0 0-3.138 3.34v26.951a3.346 3.346 0 0 0 3.345 3.345Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6975",
    d: "M20.126 44.419a3.346 3.346 0 0 0-3.162 2.25l-1.221 3.525a3.346 3.346 0 0 1-3.162 2.249h-2.245v-.022a3.345 3.345 0 0 0 2.783-2.227l1.221-3.525a3.346 3.346 0 0 1 3.162-2.25Z"
  })), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6976",
    d: "M49 60.882v21.191a3.3 3.3 0 0 1-3.252 3.346H3.252A3.3 3.3 0 0 1 0 82.073V60.882Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6977",
    d: "M5.969 85.419H3.346A3.346 3.346 0 0 1 0 82.073V60.882h2.624v21.191a3.346 3.346 0 0 0 3.345 3.346Z"
  }), /*#__PURE__*/React.createElement("ellipse", {
    "data-name": "Ellipse 466",
    cx: 13.233,
    cy: 13.94,
    rx: 13.233,
    ry: 13.94,
    transform: "translate(11.267 54.401)"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6978",
    d: "M34.354 68.56a9.857 9.857 0 1 1-3.251-7.315 9.832 9.832 0 0 1 3.251 7.315Z"
  }), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 1912"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6979",
    d: "M31.468 61.59a9.832 9.832 0 0 1 2.874 7.472 9.856 9.856 0 0 1-10.346-10.346 9.829 9.829 0 0 1 7.472 2.874Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6980",
    d: "M22.127 70.936a9.832 9.832 0 0 1 2.874 7.472 9.854 9.854 0 0 1-10.346-10.346 9.827 9.827 0 0 1 7.472 2.874Z"
  })), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 1913"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6981",
    d: "M24.499 79.18a10.628 10.628 0 1 1 10.628-10.628A10.641 10.641 0 0 1 24.499 79.18Zm0-19.714a9.085 9.085 0 1 0 9.085 9.085 9.1 9.1 0 0 0-9.085-9.085Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6982",
    d: "M24.5 64.595a3.957 3.957 0 1 0 3.957 3.957 3.961 3.961 0 0 0-3.957-3.957Z"
  })), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6983",
    d: "M29.233 51.67h6.06a1.443 1.443 0 0 0 1.443-1.443v-1.588a1.443 1.443 0 0 0-1.443-1.443h-6.06a1.443 1.443 0 0 0-1.443 1.443v1.588a1.444 1.444 0 0 0 1.443 1.443Z"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6984",
    d: "M35.287 52.444h-6.064a2.218 2.218 0 0 1-2.215-2.215V48.64a2.218 2.218 0 0 1 2.215-2.215h6.064a2.218 2.218 0 0 1 2.215 2.215v1.588a2.218 2.218 0 0 1-2.215 2.216Zm-6.064-4.475a.673.673 0 0 0-.672.672v1.588a.672.672 0 0 0 .672.672h6.064a.673.673 0 0 0 .672-.672V48.64a.673.673 0 0 0-.672-.672Z"
  }), /*#__PURE__*/React.createElement("circle", {
    "data-name": "Ellipse 467",
    cx: 2.79,
    cy: 2.79,
    r: 2.79,
    transform: "translate(6.793 76.982)"
  })));
};

var _excluded = ["title", "titleId"];

var SvgCard = function SvgCard(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 212.124 281.138",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "card_svg__a",
    x: 127.638,
    y: 28.878,
    width: 39.242,
    height: 33.621,
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: 3,
    result: "blur"
  }), /*#__PURE__*/React.createElement("feFlood", {
    floodColor: "#455a64",
    floodOpacity: 0.149
  }), /*#__PURE__*/React.createElement("feComposite", {
    operator: "in",
    in2: "blur"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in: "SourceGraphic"
  }))), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 2988"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6963",
    d: "M3.689 142.388 23.406 68.56a13.839 13.839 0 0 1 16.957-9.825l133.707 35.99a13.902 13.902 0 0 1 9.787 17.022l-19.718 73.827a13.839 13.839 0 0 1-16.956 9.824L13.475 159.41a13.902 13.902 0 0 1-9.786-17.022Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6930",
    d: "m199.829 137.417-36.345-36.409v145.9h48.634v-79.929a41.692 41.692 0 0 0-12.289-29.562Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6931",
    d: "M39.661 221.009 12.297 149.69a13.911 13.911 0 0 1 7.941-17.96l129.157-49.947a13.821 13.821 0 0 1 17.888 7.973l27.364 71.319a13.911 13.911 0 0 1-7.941 17.96L57.552 228.982a13.828 13.828 0 0 1-17.891-7.973Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6932",
    d: "M177.117 114.934 22.331 175.199l10.3 26.874 154.8-60.237Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6933",
    d: "M11.366 171.17V94.748a13.9 13.9 0 0 1 13.9-13.9H164.22a13.9 13.9 0 0 1 13.9 13.9v76.422a13.9 13.9 0 0 1-13.9 13.9H25.266a13.9 13.9 0 0 1-13.9-13.9Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6945",
    d: "M149.594 246.399h62.53v34.738h-62.53Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6946",
    d: "M139.398 142.758a15.059 15.059 0 0 0-21.746 20.825l28.468 31.057a46.851 46.851 0 0 0 .948 48.067l2.526 4.04h45.16v-48.632Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6947",
    d: "M160.178 256.821h6.948v6.948h-6.948Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6951",
    d: "M191.28 198.249a3.467 3.467 0 0 1-2.456-1.021l-13.9-13.9a3.474 3.474 0 0 1 4.912-4.913l13.9 13.9a3.475 3.475 0 0 1-2.457 5.931Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6934",
    d: "M163.807 80.848h-14.764L44.826 185.065h118.981a13.9 13.9 0 0 0 13.9-13.9V94.748a13.9 13.9 0 0 0-13.9-13.9Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6935",
    d: "M25.266 135.989h13.9v6.948h-13.9Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6936",
    d: "M25.266 156.719h13.9v6.948h-13.9Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6937",
    d: "M87.473 156.719h13.9v6.948h-13.9Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6938",
    d: "M45.94 135.989h13.894v6.948H45.94Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6939",
    d: "M66.706 135.989h13.9v6.948h-13.9Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6940",
    d: "M87.473 135.989h13.9v6.948h-13.9Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6941",
    d: "M153.253 94.526h6.948v10.422h-6.948Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6942",
    d: "M139.406 94.526h6.944v10.422h-6.948Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6943",
    d: "M125.56 94.526h6.948v10.422h-6.948Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6944",
    d: "M111.711 94.526h6.947v10.422h-6.947Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6948",
    d: "M25.266 116.74v-16.675a5.557 5.557 0 0 1 5.559-5.559h16.674a5.556 5.556 0 0 1 5.557 5.559v16.675a5.556 5.556 0 0 1-5.557 5.559H30.825a5.557 5.557 0 0 1-5.559-5.559Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6949",
    d: "M25.266 104.894h10.422v6.95H25.266Zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6950",
    d: "M42.482 104.894h10.42v6.95h-10.42Zm0 0"
  }), /*#__PURE__*/React.createElement("g", {
    "data-name": "Group 1889",
    transform: "translate(106)"
  }, /*#__PURE__*/React.createElement("rect", {
    "data-name": "Rectangle 1135",
    width: 60.76,
    height: 60.76,
    rx: 20,
    transform: "rotate(-30 56.69 15.19)"
  }), /*#__PURE__*/React.createElement("rect", {
    "data-name": "Rectangle 1136",
    width: 34.716,
    height: 34.716,
    rx: 10,
    transform: "rotate(-30 75.318 -15.57)"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(-106)",
    filter: "url(#card_svg__a)"
  }, /*#__PURE__*/React.createElement("path", {
    "data-name": "Path 6929",
    d: "m155.76 36-11.687 12-5.313-5.455",
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3
  })))));
};

export { SvgAddIcon as AddIcon, SvgAvatar as Avatar, SvgBag as Bag, SvgBellIcon as BellIcon, SvgBinIcon as BinIcon, SvgCamera as Camera, SvgCard as Card };
