import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconLocalTwo: IconComponent = createIcon("LocalTwo", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M24 44C24 44 39 32 39 19C39 10.7157 32.2843 4 24 4C15.7157 4 9 10.7157 9 19C9 32 24 44 24 44Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z" fill="' + props.colors[3] + '" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconLocalTwo;
