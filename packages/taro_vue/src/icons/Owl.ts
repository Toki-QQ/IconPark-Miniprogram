import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconOwl: IconComponent = createIcon("Owl", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M6.35826 7.30954C9.01959 11.1582 12.544 12.4023 14.2182 12.5245C17.0733 11.1273 20.4207 10.3232 24 10.3232C27.5793 10.3232 30.9267 11.1272 33.7818 12.5245C35.456 12.4023 38.9804 11.1582 41.6417 7.30954C42.3988 6.4886 44.6721 6.8713 43.8063 13.8831C43.5173 15.6385 42.7186 19.4684 42.1897 21.3732C42.6781 22.7341 42.9399 24.1731 42.9399 25.6616C42.9399 34.1328 34.4602 41 24 41C13.5398 41 5.06009 34.1328 5.06009 25.6616C5.06009 24.1731 5.3219 22.7341 5.81026 21.3732C5.28138 19.4684 4.48265 15.6385 4.19369 13.8831C3.32787 6.8713 5.60125 6.4886 6.35826 7.30954Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M25 31.25C25 31.9404 24 35 24 35C24 35 23 31.9404 23 31.25C23 30.5596 23.4477 30 24 30C24.5523 30 25 30.5596 25 31.25Z" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="17" cy="22" r="4" fill="' + props.colors[3] + '" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '"/>' + '<circle cx="31" cy="22" r="4" fill="' + props.colors[3] + '" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconOwl;
