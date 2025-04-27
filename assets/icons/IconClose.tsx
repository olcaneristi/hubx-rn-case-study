import * as React from "react";
import Svg, {
  SvgProps,
  ForeignObject,
  Circle,
  Path,
  Defs,
  ClipPath,
} from "react-native-svg";
const IconClose = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <ForeignObject width={0} height={0} x={0} y={0}></ForeignObject>
    <Circle
      cx={12}
      cy={12}
      r={12}
      fill="#000"
      fillOpacity={0.4}
      data-figma-bg-blur-radius={8}
    />
    <Path
      fill={props.color || "#fff"}
      d="M8.201 16.278a.645.645 0 0 0 .889.005l2.91-2.91 2.905 2.91c.24.24.65.24.889-.005a.64.64 0 0 0 .005-.888l-2.905-2.91 2.905-2.906a.635.635 0 0 0-.005-.888.64.64 0 0 0-.889-.005L12 11.59 9.09 8.68a.645.645 0 0 0-.889.005.643.643 0 0 0-.005.883l2.91 2.91-2.91 2.916c-.23.229-.239.644.005.883Z"
    />
    <Defs>
      <ClipPath id="a">
        <Circle cx={12} cy={12} r={12} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IconClose;
