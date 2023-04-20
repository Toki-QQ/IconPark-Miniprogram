import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconEditMovie: IconComponent = createIcon("EditMovie", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M43 9V17V31V39H34V31H43V17H34V9H43Z" fill="' + props.colors[1] + '"/>' + '<path d="M5 17V9H14V17H5V31H14V39H5V31V17Z" fill="' + props.colors[1] + '"/>' + '<path d="M43 17V9H34M43 17V31M43 17H34M5 17V9H14M5 17V31M5 17H14M5 31V39H14M5 31H14M43 31V39H34M43 31H34M34 9V17M34 9H30M34 39V31M34 39H30M14 9V17M14 9H18M14 39V31M14 39H18M14 17H18M34 17H30M34 31H30M14 31H18" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M24 7V11" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M24 17V21" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M24 27V31" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M24 37V41" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '</svg>';

});

export default IconEditMovie;
