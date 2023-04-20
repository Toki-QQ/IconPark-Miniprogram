import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconThunderbolt: IconComponent = createIcon("Thunderbolt", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M4 26C4 24.8954 4.89543 24 6 24H42C43.1046 24 44 24.8954 44 26V31.3604C44 32.3138 43.3167 33.1412 42.4802 33.5984C41.2932 34.2471 39.7561 35.5405 39.2065 38.0136C38.9669 39.0919 38.1046 40 37 40H11C9.89543 40 9.03308 39.0919 8.79348 38.0136C8.24394 35.5405 6.70677 34.2471 5.51983 33.5984C4.68326 33.1412 4 32.3138 4 31.3604V26Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M14 31H34" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M25 4L19 11H29L23 18" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconThunderbolt;
