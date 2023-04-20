import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconWoman: IconComponent = createIcon("Woman", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M32.4853 24.4853C34.6569 22.3137 36 19.3137 36 16C36 9.37258 30.6274 4 24 4C17.3726 4 12 9.37258 12 16C12 19.3137 13.3431 22.3137 15.5147 24.4853" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M6 44L7 39L18 31L24 37L30 31L41 39L42 44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M12.9934 21.0071C13.0061 16.8965 13.6749 13.8941 15 11.9999C16.9877 9.15871 18.387 9.36755 19.4054 9.81009C20.4238 10.2526 21.0226 13.1442 22.7236 13.9777C24.4246 14.8112 28.7777 14.9141 30.2687 15.9167C31.7597 16.9194 35.1696 18.7844 34.3195 21.9684" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconWoman;
