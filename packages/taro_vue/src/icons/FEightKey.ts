import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconFEightKey: IconComponent = createIcon("FEightKey", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<rect x="6" y="6" width="36" height="36" rx="3" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M30 24C32.2091 24 34 22.2091 34 20C34 17.7909 32.2091 16 30 16C27.7909 16 26 17.7909 26 20C26 22.2091 27.7909 24 30 24Z" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M30 33C32.2091 33 34 31.2091 34 29C34 26.7909 32.2091 25 30 25C27.7909 25 26 26.7909 26 29C26 31.2091 27.7909 33 30 33Z" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M21 16H14V32" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M14 24H21" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconFEightKey;
