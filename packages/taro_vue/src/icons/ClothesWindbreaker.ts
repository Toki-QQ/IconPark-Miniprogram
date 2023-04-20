import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconClothesWindbreaker: IconComponent = createIcon("ClothesWindbreaker", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M37 25V37M11 37V44H37V37M11 37H4V18L10.125 13L17 18L24 10L31 18L37.875 13L44 18V37H37M11 37V25" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M17 18L24 10L31 18L42 10L39.5 4H9L6 10L17 18Z" fill="' + props.colors[1] + '"/>' + '<path d="M19 10H24M29 10H24M24 10L17 18L6 10L9 4H39.5L42 10L31 18L24 10Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconClothesWindbreaker;
