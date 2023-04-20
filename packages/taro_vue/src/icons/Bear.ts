import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconBear: IconComponent = createIcon("Bear", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M5 13.0606C5 15.5392 6.29171 17.5214 8 19C6.92442 21.1464 6 23.4737 6 26C6 35.2215 14.1238 43 24 43C33.8762 43 42 35.2215 42 26C42 23.4737 41.0756 21.1464 40 19C41.7083 17.5214 43 15.4786 43 13C43 8.54825 39.3208 5 35 5C31.7266 5 29.167 7.06019 28 10C26.7347 9.73491 25.351 9.60606 24 9.60606C22.649 9.60606 21.2653 9.73491 20 10C18.833 7.06019 16.2734 5 13 5C8.67918 5 5 8.60886 5 13.0606Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="20" cy="19" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="28" cy="19" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="24" cy="26" r="3" fill="' + props.colors[2] + '"/>' + '<path d="M24 26V34" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M28 33C25.7238 35.2762 22.2762 35.2762 20 33" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '</svg>';

});

export default IconBear;
