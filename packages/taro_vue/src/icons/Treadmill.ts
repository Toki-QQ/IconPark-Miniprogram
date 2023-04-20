import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconTreadmill: IconComponent = createIcon("Treadmill", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M39.75 44.0001H9.31C6.38 44.0001 4 41.6201 4 38.6901V33.2701C4 32.0601 5.06 31.1301 6.25 31.2801L40.27 35.5301C42.4 35.8001 44 37.6101 44 39.7501C44 42.1001 42.1 44.0001 39.75 44.0001Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M16 32L4 4H10.43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M6 31L12 23" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M25 15H9" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconTreadmill;
