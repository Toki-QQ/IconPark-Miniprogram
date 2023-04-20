import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconTwoTriangles: IconComponent = createIcon("TwoTriangles", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z" fill="' + props.colors[1] + '"/>' + '<path d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z" fill="' + props.colors[1] + '"/>' + '<path d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconTwoTriangles;
