import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const IconProfile = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#BDBDBD"}
      d="M12.952 11.772c2.384 0 4.456-2.002 4.456-4.61a4.456 4.456 0 0 0-4.456-4.483c-2.384 0-4.456 1.95-4.456 4.505 0 2.586 2.06 4.588 4.456 4.588Zm-7.475 9.657h14.94c1.191 0 1.904-.522 1.904-1.387 0-2.69-3.598-6.403-9.38-6.403-5.771 0-9.37 3.712-9.37 6.403 0 .865.714 1.387 1.906 1.387Z"
    />
  </Svg>
);
export default IconProfile;
