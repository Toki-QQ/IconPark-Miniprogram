import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconInstagram: IconComponent = createIcon("Instagram", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M34 6H14C9.58172 6 6 9.58172 6 14V34C6 38.4183 9.58172 42 14 42H34C38.4183 42 42 38.4183 42 34V14C42 9.58172 38.4183 6 34 6Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="' + props.colors[3] + '" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M35 15C36.1046 15 37 14.1046 37 13C37 11.8954 36.1046 11 35 11C33.8954 11 33 11.8954 33 13C33 14.1046 33.8954 15 35 15Z" fill="' + props.colors[2] + '"/>' + '</svg>';

});

export default IconInstagram;
