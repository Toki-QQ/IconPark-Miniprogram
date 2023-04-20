import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconWaterpoloOne: IconComponent = createIcon("WaterpoloOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M4 35L6.5 36.3514C8.1 37.2162 9.9 37.2162 11.5 36.3514C13.1 35.4865 14.9 35.4865 16.5 36.3514C18.1 37.2162 19.9 37.2162 21.5 36.3514C23.1 35.4865 24.9 35.4865 26.5 36.3514C28.1 37.2162 29.9 37.2162 31.5 36.3514C33.1 35.4865 34.9 35.4865 36.5 36.3514C38.1 37.2162 39.9 37.2162 41.5 36.3514L44 35" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M4 41L6.5 42.3514C8.1 43.2162 9.9 43.2162 11.5 42.3514C13.1 41.4865 14.9 41.4865 16.5 42.3514C18.1 43.2162 19.9 43.2162 21.5 42.3514C23.1 41.4865 24.9 41.4865 26.5 42.3514C28.1 43.2162 29.9 43.2162 31.5 42.3514C33.1 41.4865 34.9 41.4865 36.5 42.3514C38.1 43.2162 39.9 43.2162 41.5 42.3514L44 41" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M25 18C27.7614 18 30 15.7614 30 13C30 10.2386 27.7614 8 25 8C22.2386 8 20 10.2386 20 13C20 15.7614 22.2386 18 25 18Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2"/>' + '<path d="M25 29L24 25" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M4 11L11 22L24 24.93H42" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M11 10C12.6569 10 14 8.65685 14 7C14 5.34315 12.6569 4 11 4C9.34315 4 8 5.34315 8 7C8 8.65685 9.34315 10 11 10Z" fill="' + props.colors[0] + '"/>' + '</svg>';

});

export default IconWaterpoloOne;
