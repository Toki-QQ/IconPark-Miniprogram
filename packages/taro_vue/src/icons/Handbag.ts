import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconHandbag: IconComponent = createIcon("Handbag", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M14 14C14 10.6863 16.6863 8 20 8H29C32.3137 8 35 10.6863 35 14V16H14V14Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M4 25L23.5149 29.8787C23.8334 29.9584 24.1666 29.9584 24.4851 29.8787L44 25V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V25Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M44 27V18C44 16.8954 43.1046 16 42 16H6C4.89543 16 4 16.8954 4 18V27" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M26.5 23C26.5 24.3807 25.3807 25.5 24 25.5C22.6193 25.5 21.5 24.3807 21.5 23C21.5 21.6193 22.6193 20.5 24 20.5C25.3807 20.5 26.5 21.6193 26.5 23Z" fill="' + props.colors[0] + '"/>' + '</svg>';

});

export default IconHandbag;
