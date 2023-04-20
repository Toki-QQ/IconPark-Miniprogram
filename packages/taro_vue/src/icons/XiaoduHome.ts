import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconXiaoduHome: IconComponent = createIcon("XiaoduHome", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M4 20L24 6L44 20V42H4V20Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M12.6865 26.6863C14.1723 25.2006 15.9361 24.022 17.8773 23.2179C19.8185 22.4139 21.8991 22 24.0002 22C26.1014 22 28.182 22.4139 30.1232 23.2179C32.0644 24.022 33.8282 25.2006 35.314 26.6863" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M18.3428 32.3431C19.0856 31.6003 19.9676 31.011 20.9382 30.609C21.9088 30.2069 22.9491 30 23.9996 30C25.0502 30 26.0905 30.2069 27.0611 30.609C28.0317 31.011 28.9136 31.6003 29.6565 32.3431" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconXiaoduHome;
