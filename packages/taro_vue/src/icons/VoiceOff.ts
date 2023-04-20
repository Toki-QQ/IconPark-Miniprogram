import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconVoiceOff: IconComponent = createIcon("VoiceOff", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M31 24V11C31 7.13401 27.866 4 24 4C20.134 4 17 7.13401 17 11V24C17 27.866 20.134 31 24 31C27.866 31 31 27.866 31 24Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M9 23C9 31.2843 15.7157 38 24 38C25.7532 38 27.4361 37.6992 29 37.1465M39 23C39 25.1333 38.5547 27.1626 37.7519 29" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M24 38V44" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M42 42L6 6" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconVoiceOff;
