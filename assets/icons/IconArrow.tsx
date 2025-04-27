import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { View, ViewStyle } from "react-native";

interface IconArrowProps extends SvgProps {
  rotate?: number;
}

const IconArrow = ({ rotate = 0, style, ...props }: IconArrowProps) => (
  <View
    style={[{ transform: [{ rotate: `${rotate}deg` }] }, style as ViewStyle]}
  >
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          fill={props.color || "#D0B070"}
          d="M10 19a1 1 0 0 1-.77-1.64L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={props.color || "#fff"} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);

export default IconArrow;
