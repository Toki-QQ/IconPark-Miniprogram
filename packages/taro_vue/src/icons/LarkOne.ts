import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconLarkOne: IconComponent = createIcon("LarkOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="' + 'url(#' + props.id + '36f0af1b' + ')' + '">' + '<path d="M3.49381 17.7193L41.6776 6.32232L30.3639 44.5893L21.4834 35.7089L21.5251 26.4749L11.9791 26.2045L3.49381 17.7193Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M27.5352 14.8908C25.9731 16.4529 25.9731 18.9856 27.5352 20.5477C29.0973 22.1098 31.63 22.1098 33.1921 20.5477C34.7542 18.9856 34.7542 16.4529 33.1921 14.8908C31.63 13.3287 29.0973 13.3287 27.5352 14.8908Z" fill="' + props.colors[0] + '"/>' + '<path d="M41.6777 6.40558L30.364 17.7193" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</g>' + '<defs>' + '<clipPath id="' + props.id + '36f0af1b' + '">' + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>' + '</clipPath>' + '</defs>' + '</svg>';

});

export default IconLarkOne;
