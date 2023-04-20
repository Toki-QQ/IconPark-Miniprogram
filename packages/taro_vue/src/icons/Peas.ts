import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconPeas: IconComponent = createIcon("Peas", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="' + 'url(#' + props.id + '65f8bd65' + ')' + '">' + '<path d="M27 12.0002C27 12.0002 33.9994 19.0002 33.9995 28.0002C33.9996 37.0002 29.5554 44.2229 25.9995 44.0001C22.4437 43.7774 18.9999 37.0001 20 28.0002C21 19.0002 27 12.0002 27 12.0002Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M26.9998 12.0003C26.9998 12.0003 28.0011 7.87556 31.0002 5.93792C33.9994 4.00028 39.8901 9.00031 39 12.0003C38.1099 15.0003 34.9996 15.0003 33.9997 12.0003C32.9998 9.00031 38 5.50031 41 5.93792C44 6.37553 44.2569 11.1801 44 14.0003C43.499 19.5003 42 24.0003 42 24.0003" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M26.9999 11.9999C26.9999 11.9999 26.9999 19.9999 20 27.9999C13.0001 35.9999 6.32546 37.6995 4.00039 34.9999C1.67532 32.3003 4.00039 24.9999 11.0001 17.9999C17.9997 10.9999 26.9999 11.9999 26.9999 11.9999Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="27.2432" cy="27.4077" r="2.5" fill="' + props.colors[0] + '"/>' + '<circle cx="26.2432" cy="34.4077" r="2.5" fill="' + props.colors[0] + '"/>' + '</g>' + '<defs>' + '<clipPath id="' + props.id + '65f8bd65' + '">' + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>' + '</clipPath>' + '</defs>' + '</svg>';

});

export default IconPeas;
