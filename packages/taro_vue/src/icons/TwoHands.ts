import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconTwoHands: IconComponent = createIcon("TwoHands", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M36.9997 19.9756L36.0171 23.9332L27.3113 30.2402L27.3613 41.9575L33.9997 42.0001L33.627 33.5146C40.5485 29.1858 44.0092 26.0143 44.0092 24.0001C44.0092 21.9859 44.0092 16.6721 44.0092 6.05867" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M10.9997 20.0509L12.0329 24.0002L20.4003 30.4158L20.7592 42.1278L13.9997 42.0002L14.2027 33.9086C7.4091 30.0008 4.01232 27.025 4.01232 24.9811C4.01232 22.9373 4.01232 17.2866 4.01232 6.0291" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconTwoHands;
