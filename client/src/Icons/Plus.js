import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({width, height, color, props}) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="plus-circle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      color={color}
      className="prefix__svg-inline--fa prefix__fa-plus-circle prefix__fa-w-16 prefix__fa-5x"
      {...props}>
      <Path
        fill="currentColor"
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"
      />
    </Svg>
  );
}

export default SvgComponent;
