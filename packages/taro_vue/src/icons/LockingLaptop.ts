import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconLockingLaptop: IconComponent = createIcon("LockingLaptop", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M24 9H11C9.34315 9 8 10.3431 8 12V33H40V28" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<rect x="30" y="13" width="12" height="8" rx="3" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M36 7C37.6569 7 39 8.34315 39 10L39 13L33 13L33 10C33 8.34315 34.3431 7 36 7Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconLockingLaptop;
