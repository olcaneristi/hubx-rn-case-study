import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IconMessage = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={45}
    viewBox="0 0 52 45"
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="M28.674 23.355a4.807 4.807 0 0 1-5.348 0l-13.113-8.742a4.719 4.719 0 0 1-.213-.151v14.325a2.945 2.945 0 0 0 2.946 2.945h26.108A2.945 2.945 0 0 0 42 28.787V14.462c-.07.052-.14.103-.214.151l-13.112 8.742Z"
      />
      <Path
        fill="url(#c)"
        d="m11.253 13.053 13.113 8.742a2.942 2.942 0 0 0 3.268 0l13.113-8.742A2.807 2.807 0 0 0 42 10.71a2.948 2.948 0 0 0-2.945-2.944h-26.11A2.949 2.949 0 0 0 10 10.712c0 .943.469 1.818 1.253 2.34Z"
      />
    </G>
    <G filter="url(#d)">
      <Rect
        width={15}
        height={15}
        x={31}
        y={2}
        fill="#E82C13"
        fillOpacity={0.9}
        rx={7.5}
        shapeRendering="crispEdges"
      />
      <Path
        fill="#fff"
        d="M38.67 12.341h.984V6h-.984L37 7.187v.966l1.595-1.138h.075v5.326Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={26}
        x2={41.809}
        y1={14.462}
        y2={37.551}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F0D399" />
        <Stop offset={1} stopColor="#D9A846" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={26}
        x2={38.334}
        y1={7.766}
        y2={29.186}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F0D399" />
        <Stop offset={1} stopColor="#D9A846" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default IconMessage;
