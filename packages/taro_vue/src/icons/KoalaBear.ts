import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconKoalaBear: IconComponent = createIcon("KoalaBear", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<circle cx="24" cy="26" r="15" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M21 31.5625C21 29.664 24 24 24 24C24 24 27 29.664 27 31.5625C27 33.461 25.6569 35 24 35C22.3431 35 21 33.461 21 31.5625Z" fill="' + props.colors[3] + '" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="17.0391" cy="23.4932" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="31.0391" cy="23.4932" r="2" fill="' + props.colors[2] + '"/>' + '<path d="M17 11.9269C15.6214 9.52446 8.49451 6.09319 5.34959 9.30595C4.01392 10.4178 2.98594 15.4499 5.72704 23L10 19.9798" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M31 11.9269C32.3786 9.52446 39.5055 6.0932 42.6504 9.30595C43.9861 10.4178 45.0141 15.4499 42.273 23L38 19.9802" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconKoalaBear;
