import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconGobletOne: IconComponent = createIcon("GobletOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="' + 'url(#' + props.id + '45e04bcb' + ')' + '">' + '<path d="M5.73633 24.1211L10.6861 29.0709C15.7629 34.1477 23.9941 34.1477 29.0709 29.0709V29.0709C34.1477 23.994 34.1477 15.7629 29.0709 10.6861L24.1211 5.73632" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M30 29.9998L35.9998 35.9998" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<ellipse cx="13.9996" cy="13.9998" rx="13" ry="7" transform="rotate(-45 13.9996 13.9998)" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<ellipse cx="37.9997" cy="37.9998" rx="6" ry="3" transform="rotate(-45 37.9997 37.9998)" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</g>' + '<defs>' + '<clipPath id="' + props.id + '45e04bcb' + '">' + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>' + '</clipPath>' + '</defs>' + '</svg>';

});

export default IconGobletOne;
