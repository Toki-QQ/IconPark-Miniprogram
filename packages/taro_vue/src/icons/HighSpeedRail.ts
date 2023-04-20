import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconHighSpeedRail: IconComponent = createIcon("HighSpeedRail", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M9 20V30C9 34.4183 12.5817 38 17 38H31C35.4183 38 39 34.4183 39 30V20" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M34 38V42" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M14 38V42" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M20 44L28 44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M9 16.3609C9 13 15 4 24 4C33 4 39 13 39 16.3609C39 19.7218 39 20 39 20H9C9 20 9 19.7218 9 16.3609Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M20.5 32C20.5 32.8284 19.8284 33.5 19 33.5C18.1716 33.5 17.5 32.8284 17.5 32C17.5 31.1716 18.1716 30.5 19 30.5C19.8284 30.5 20.5 31.1716 20.5 32Z" fill="' + props.colors[0] + '" stroke="' + props.colors[0] + '"/>' + '<path d="M30.5 32C30.5 32.8284 29.8284 33.5 29 33.5C28.1716 33.5 27.5 32.8284 27.5 32C27.5 31.1716 28.1716 30.5 29 30.5C29.8284 30.5 30.5 31.1716 30.5 32Z" fill="' + props.colors[0] + '" stroke="' + props.colors[0] + '"/>' + '<path d="M22 11L26 11" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconHighSpeedRail;
