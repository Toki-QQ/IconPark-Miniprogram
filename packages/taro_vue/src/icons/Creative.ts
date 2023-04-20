import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconCreative: IconComponent = createIcon("Creative", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M42 39V9.00003C42 7.34317 40.6569 6.00003 39 6.00003L9 6C7.34314 6 5.99999 7.34315 6 9.00001L6.00006 39C6.00006 40.6569 7.3432 42 9.00005 42H39C40.6569 42 42 40.6569 42 39Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M23.9994 18.3159L21.1038 24.2264L14.5264 25.1801L19.2911 29.8383L18.1521 36.3159L23.9994 33.1987L29.8479 36.3159L28.7173 29.8383L33.4737 25.1801L26.9328 24.2264L23.9994 18.3159Z" fill="' + props.colors[3] + '" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M18.3159 12.6316H29.6843" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconCreative;
