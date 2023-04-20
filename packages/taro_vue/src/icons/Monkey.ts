import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconMonkey: IconComponent = createIcon("Monkey", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M13.2 21C12.4312 19.531 12 17.8817 12 16.1389C12 9.98704 17.3726 5 24 5C30.6274 5 36 9.98704 36 16.1389C36 17.8817 35.5688 19.531 34.8 21" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<ellipse cx="24" cy="31" rx="15" ry="12" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M30.5177 33.8742C26.8486 37.5433 20.7965 37.44 17 33.6435" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M12 23C8.68629 23 6 20.7614 6 18C6 15.2386 8.68629 13 12 13" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M36 23C39.3137 23 42 20.7614 42 18C42 15.2386 39.3137 13 36 13" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<circle cx="20" cy="14" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="28" cy="14" r="2" fill="' + props.colors[0] + '"/>' + '</svg>';

});

export default IconMonkey;
