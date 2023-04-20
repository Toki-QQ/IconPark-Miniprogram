import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconCurling: IconComponent = createIcon("Curling", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M38 42H10C6.69 42 4 39.32 4 36V28C4 24.69 6.68 22 10 22H38C41.31 22 44 24.68 44 28V36C44 39.32 41.32 42 38 42Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M4 32H44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M10 22L16.48 7.2C16.79 6.47 17.51 6 18.31 6H35.5C37.43 6 39 7.57 39 9.5C39 11.43 37.43 13 35.5 13H22V22H10Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconCurling;
