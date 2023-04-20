import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconTabletennis: IconComponent = createIcon("Tabletennis", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M31.4502 16.96C34.2116 16.96 36.4502 14.7214 36.4502 11.96C36.4502 9.19854 34.2116 6.95996 31.4502 6.95996C28.6888 6.95996 26.4502 9.19854 26.4502 11.96C26.4502 14.7214 28.6888 16.96 31.4502 16.96Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2"/>' + '<path d="M36 34L34 23L23 28L10 25" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M4 41.0298H44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="9" cy="25" r="5" fill="' + props.colors[0] + '"/>' + '<circle cx="6" cy="17" r="2" fill="' + props.colors[0] + '"/>' + '<path d="M34 23L44 29L29 34" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-miterlimit="2" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconTabletennis;
