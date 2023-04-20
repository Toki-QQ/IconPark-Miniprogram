import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconPerspective: IconComponent = createIcon("Perspective", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M44 28V36L31 38.6M44 28L4 32M44 28V20M4 32V44L17 41.4M4 32V16M44 20V12L31 9.4M44 20L4 16M4 16V4L17 6.6M31 9.4V38.6M31 9.4L17 6.6M31 38.6L17 41.4M17 6.6V41.4" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconPerspective;
