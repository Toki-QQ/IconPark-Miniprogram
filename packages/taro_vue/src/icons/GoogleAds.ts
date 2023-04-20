import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconGoogleAds: IconComponent = createIcon("GoogleAds", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="' + 'url(#' + props.id + 'b10dde87' + ')' + '">' + '<path d="M41.3551 34.1527L29.5218 8.7761C28.1213 5.77286 24.5514 4.47352 21.5482 5.87396C18.545 7.27439 17.2456 10.8443 18.6461 13.8475L30.4794 39.2241C31.8798 42.2274 35.4497 43.5267 38.4529 42.1263C41.4562 40.7258 42.7555 37.156 41.3551 34.1527Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M23.4375 26.5357L17.5209 39.224C16.1204 42.2273 12.5506 43.5266 9.54731 42.1262V42.1262C6.54407 40.7257 5.24474 37.1558 6.64517 34.1526L18.374 9" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<circle cx="12.0828" cy="36.6882" r="6" transform="rotate(25 12.0828 36.6882)" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</g>' + '<defs>' + '<clipPath id="' + props.id + 'b10dde87' + '">' + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>' + '</clipPath>' + '</defs>' + '</svg>';

});

export default IconGoogleAds;
