import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconBanana: IconComponent = createIcon("Banana", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="' + 'url(#' + props.id + '601bb0d7' + ')' + '">' + '<path d="M15.9993 32C13.1998 31.0668 9.96483 28.8274 8.52376 26.5745C8.32636 26.2659 8.25521 25.8975 8.27911 25.5319L8.52427 21.7819C8.57721 20.9722 9.53405 20.5412 10.1952 21.0115C12.3289 22.5293 16.2279 25 18.9993 25C25.9993 25 31.9993 22.5 34.9993 17" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M25.9994 43C35.9993 40.9999 45.2422 30.5149 42.867 19.9413L41.9993 16L41.9993 7.99998L35.9993 6.99997C35.9993 19.9413 32.9995 30 19.9994 32C14.0231 32.9194 8.29412 31.6136 3.87018 29.0781L4.99939 36C6.99933 41 15.9995 45 25.9994 43Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</g>' + '<defs>' + '<clipPath id="' + props.id + '601bb0d7' + '">' + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>' + '</clipPath>' + '</defs>' + '</svg>';

});

export default IconBanana;
