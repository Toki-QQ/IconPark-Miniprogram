import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconSnakeZodiac: IconComponent = createIcon("SnakeZodiac", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="' + 'url(#' + props.id + '69e2ec45' + ')' + '">' + '<path d="M35.7858 39.083L38.6142 36.2546C40.9574 33.9114 40.9574 30.1125 38.6142 27.7693V27.7693C36.2711 25.4262 32.4721 25.4262 30.1289 27.7693L27.6675 30.2308" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M17.4011 23.5263L24.4721 16.4553C26.8153 14.1121 26.8153 10.3131 24.4721 7.97V7.97C22.129 5.62685 18.33 5.62685 15.9869 7.97L8.91578 15.0411" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M18.2827 22.6454L9.62259 31.3055C7.27945 33.6487 7.27945 37.4477 9.62259 39.7908V39.7908C11.9657 42.134 15.7647 42.134 18.1079 39.7908L28.0074 29.8913" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M15 8.99969H7" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</g>' + '<defs>' + '<clipPath id="' + props.id + '69e2ec45' + '">' + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>' + '</clipPath>' + '</defs>' + '</svg>';

});

export default IconSnakeZodiac;
