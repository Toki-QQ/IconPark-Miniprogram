import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconMovingPicture: IconComponent = createIcon("MovingPicture", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<rect x="6" y="22" width="20" height="20" rx="3" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M30 6L42 6L42 18" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="34" cy="42" r="1.5" fill="' + props.colors[0] + '" stroke="' + props.colors[0] + '"/>' + '<circle r="1.5" transform="matrix(1 0 0 -1 6 14)" fill="' + props.colors[0] + '" stroke="' + props.colors[0] + '"/>' + '<circle cx="42" cy="42" r="1.5" fill="' + props.colors[0] + '" stroke="' + props.colors[0] + '"/>' + '<circle r="1.5" transform="matrix(1 0 0 -1 6 6)" fill="' + props.colors[0] + '" stroke="' + props.colors[0] + '"/>' + '<circle cx="42" cy="34" r="1.5" fill="' + props.colors[0] + '" stroke="' + props.colors[0] + '"/>' + '<circle r="1.5" transform="matrix(1 0 0 -1 14 6)" fill="' + props.colors[0] + '" stroke="' + props.colors[0] + '"/>' + '<circle cx="42" cy="26" r="1.5" fill="' + props.colors[0] + '" stroke="' + props.colors[0] + '"/>' + '<circle r="1.5" transform="matrix(1 0 0 -1 22 6)" fill="' + props.colors[0] + '" stroke="' + props.colors[0] + '"/>' + '<path d="M6 34L12.1195 29.4103C13.2239 28.5821 14.7509 28.6143 15.8192 29.4885L25 37" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M42 6L30 18" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconMovingPicture;
