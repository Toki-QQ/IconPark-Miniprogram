import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconRiding: IconComponent = createIcon("Riding", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M33 14C35.7614 14 38 11.7614 38 9C38 6.23858 35.7614 4 33 4C30.2386 4 28 6.23858 28 9C28 11.7614 30.2386 14 33 14Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2"/>' + '<path d="M40.0002 22.9998H32.3702C31.8102 22.9998 31.2702 22.7598 30.8902 22.3498L25.5502 16.5698C24.9002 15.8598 23.8402 15.7098 23.0202 16.2098L15.5702 20.7898C14.9402 21.1798 14.9402 22.0998 15.5702 22.4898L23.0302 27.0598C23.6202 27.4198 23.9902 28.0698 23.9902 28.7698L24.0002 37.9998" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="36.5" cy="36.5" r="7.5" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<circle cx="11.5" cy="36.5" r="7.5" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconRiding;
