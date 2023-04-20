import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconVolleyball: IconComponent = createIcon("Volleyball", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M31.81 42.4054C41.9782 38.0865 46.7173 26.3494 42.4081 16.192C38.0989 6.0345 26.351 1.27569 16.1928 5.59461C6.03464 9.91353 1.2755 21.6506 5.59472 31.808C9.91394 41.9655 21.6518 46.7243 31.81 42.4054Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M15.9996 6C14.5059 13.0103 17.9367 20.1966 23.9996 24" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M12 40C18.97 37.74 23.74 31.32 24 24" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M44 25.0001C38.55 20.3276 29.5 20.4033 24 24.0001" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M17 16C17 16 28.56 7.50998 41 14" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M20 33C20 33 7.59 28.02 7 14" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M33.9998 22C33.9998 22 35.5597 36.5 23.7197 44.03" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconVolleyball;
