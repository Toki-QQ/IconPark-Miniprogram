import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconApiApp: IconComponent = createIcon("ApiApp", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M18 23.9372V10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10V12.0057" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M30 24.0034V37.9999C30 41.3136 27.3137 43.9999 24 43.9999C20.6863 43.9999 18 41.3136 18 37.9999V35.9699" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M24 30H9.98415C6.67919 30 4 27.3137 4 24C4 20.6863 6.67919 18 9.98415 18H11.9886" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M24 18H37.9888C41.3087 18 44 20.6863 44 24C44 27.3137 41.3087 30 37.9888 30H36.0663" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '</svg>';

});

export default IconApiApp;
