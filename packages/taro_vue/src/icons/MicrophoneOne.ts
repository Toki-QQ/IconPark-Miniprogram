import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconMicrophoneOne: IconComponent = createIcon("MicrophoneOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M15 26.3137C15 26.3137 19.5962 25.9602 22.7782 22.7782C25.9601 19.5962 26.3137 15 26.3137 15L34.0657 27.1817C35.3205 29.1535 35.0374 31.7322 33.3848 33.3848C31.7322 35.0374 29.1535 35.3205 27.1817 34.0657L15 26.3137Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<circle cx="15" cy="15" r="11" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M5.65674 25.4561L25.4557 5.65707" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M34 33L42 41L33 41" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconMicrophoneOne;
