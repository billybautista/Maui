import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({width, height, props}) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="far"
      data-icon="list-ul"
      width={width}
      height={height}
      color="#444D52"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="prefix__svg-inline--fa prefix__fa-list-ul prefix__fa-w-16 prefix__fa-5x"
      {...props}>
      <Path
        fill="currentColor"
        d="M48 368a48 48 0 1048 48 48 48 0 00-48-48zm0-160a48 48 0 1048 48 48 48 0 00-48-48zm0-160a48 48 0 1048 48 48 48 0 00-48-48zm448 24H176a16 16 0 00-16 16v16a16 16 0 0016 16h320a16 16 0 0016-16V88a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v16a16 16 0 0016 16h320a16 16 0 0016-16v-16a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v16a16 16 0 0016 16h320a16 16 0 0016-16v-16a16 16 0 00-16-16z"
      />
    </Svg>
  );
}

export default SvgComponent;
