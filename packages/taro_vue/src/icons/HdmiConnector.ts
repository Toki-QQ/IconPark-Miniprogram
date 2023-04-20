import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconHdmiConnector: IconComponent = createIcon("HdmiConnector", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<circle cx="24" cy="24" r="20" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M29 43C29 40.2386 26.7614 38 24 38C21.2386 38 19 40.2386 19 43" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M15.5 42.1091C18.0797 43.3221 20.9607 44 24 44C27.0393 44 29.9203 43.3221 32.5 42.1091" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="15" cy="15" r="3" fill="' + props.colors[2] + '"/>' + '<circle cx="11" cy="23" r="3" fill="' + props.colors[2] + '"/>' + '<circle cx="24" cy="11" r="3" fill="' + props.colors[2] + '"/>' + '<circle cx="33" cy="15" r="3" fill="' + props.colors[2] + '"/>' + '<circle cx="37" cy="23" r="3" fill="' + props.colors[2] + '"/>' + '</svg>';

});

export default IconHdmiConnector;
