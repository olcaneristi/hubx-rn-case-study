import * as React from "react";
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from "react-native-svg";
const IconScanOutline = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Rect
      width={36}
      height={35.681}
      y={0.319}
      fill={"#000"}
      fillOpacity={0.24}
      rx={8}
    />
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M13.5 25.453h-2.25a.704.704 0 0 1-.703-.703V22.5a.422.422 0 0 0-.844 0v2.25a1.55 1.55 0 0 0 1.547 1.547h2.25a.422.422 0 0 0 0-.844ZM25.875 22.078a.422.422 0 0 0-.422.422v2.25a.704.704 0 0 1-.703.703H22.5a.422.422 0 0 0 0 .844h2.25a1.55 1.55 0 0 0 1.547-1.547V22.5a.422.422 0 0 0-.422-.422ZM10.125 13.922a.42.42 0 0 0 .422-.422v-2.25a.703.703 0 0 1 .703-.703h2.25a.422.422 0 0 0 0-.844h-2.25a1.55 1.55 0 0 0-1.547 1.547v2.25a.421.421 0 0 0 .422.422ZM24.75 9.703H22.5a.422.422 0 1 0 0 .844h2.25a.703.703 0 0 1 .703.703v2.25a.421.421 0 0 0 .844 0v-2.25a1.55 1.55 0 0 0-1.547-1.547ZM13.078 14.625v2.11h9.844v-2.11a1.55 1.55 0 0 0-1.547-1.547h-6.75a1.55 1.55 0 0 0-1.547 1.547Z" />
      <Path
        fillOpacity={0.7}
        d="M22.922 21.375v-2.953h1.828a.422.422 0 0 0 0-.844h-13.5a.422.422 0 0 0 0 .844h1.828v2.953a1.55 1.55 0 0 0 1.547 1.547h6.75a1.55 1.55 0 0 0 1.547-1.547Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M9 9h18v18H9z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default IconScanOutline;
