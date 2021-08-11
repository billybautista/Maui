import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({width, height, props}) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="far"
      data-icon="ellipsis-v"
      width={width}
      height={height}
      color="#131313"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 512"
      className="prefix__svg-inline--fa prefix__fa-ellipsis-v prefix__fa-w-4 prefix__fa-5x"
      {...props}>
      <Path
        fill="currentColor"
        d="M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z"
      />
    </Svg>
  );
}

export default SvgComponent;
