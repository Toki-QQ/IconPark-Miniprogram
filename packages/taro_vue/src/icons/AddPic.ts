import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconAddPic: IconComponent = createIcon("AddPic", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M38 21V40C38 41.1046 37.1046 42 36 42H8C6.89543 42 6 41.1046 6 40V12C6 10.8954 6.89543 10 8 10H26.3636" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="10" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M12.0005 31.0308L18.0005 23L21.0005 26L24.5005 20.5L32.0005 31.0308H12.0005Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="10" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M34.0005 10H42.0005" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="10" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M37.9946 5.79541V13.7954" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="10" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconAddPic;
