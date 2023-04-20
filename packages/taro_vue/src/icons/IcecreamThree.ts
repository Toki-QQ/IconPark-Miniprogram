import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconIcecreamThree: IconComponent = createIcon("IcecreamThree", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M14 14C14 8.47715 18.4772 4 24 4V4C29.5228 4 34 8.47715 34 14V31.7308C34 31.8795 33.8795 32 33.7308 32H14.2692C14.1205 32 14 31.8795 14 31.7308V14Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M21 32V41C21 42.6569 22.3431 44 24 44V44C25.6569 44 27 42.6569 27 41V32" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M14 16V16C16.7614 18.7614 21.2386 18.7614 24 16V16V16C26.7614 13.2386 31.2386 13.2386 34 16V16" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconIcecreamThree;
