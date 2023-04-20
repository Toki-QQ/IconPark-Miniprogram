import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconWebPage: IconComponent = createIcon("WebPage", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<rect x="4" y="8" width="40" height="32" rx="3" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)" fill="' + props.colors[2] + '"/>' + '<circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)" fill="' + props.colors[2] + '"/>' + '</svg>';

});

export default IconWebPage;
