import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconAries: IconComponent = createIcon("Aries", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M5.50934 19.0293C3.08128 15.2358 2.82341 7.06076 10.5522 6.02314C15.8552 5.45972 23.1035 15.1207 24 42C24.8965 15.1207 32.1448 5.45972 37.4478 6.02314C45.1766 7.06076 44.9187 15.2358 42.4907 19.0293" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconAries;
