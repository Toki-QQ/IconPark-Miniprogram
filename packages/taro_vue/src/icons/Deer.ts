import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconDeer: IconComponent = createIcon("Deer", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M36 27C36 34.2165 30.6274 44 24 44C17.3726 44 12 34.2165 12 27C12 19.7835 13.5 16 24 16C34.5 16 36 19.7835 36 27Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<ellipse rx="5" ry="3.5" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 38.9996 17.5003)" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<ellipse cx="8.99963" cy="17.4997" rx="5" ry="3.5" transform="rotate(45 8.99963 17.4997)" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M12 4C12 10.6274 17.3726 16 24 16C30.6274 16 36 10.6274 36 4" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M18 7C18 11.9706 20.6863 16 24 16C27.3137 16 30 11.9706 30 7" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<circle cx="19.9995" cy="26" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="23.9995" cy="34" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="27.9995" cy="26" r="2" fill="' + props.colors[2] + '"/>' + '</svg>';

});

export default IconDeer;
