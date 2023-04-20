import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconPhoneOne: IconComponent = createIcon("PhoneOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<rect x="5" y="5" width="38" height="38" rx="3" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<rect x="11" y="12" width="8" height="24" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<rect x="25" y="12" width="12" height="6" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="25" cy="24" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="25" cy="30" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="25" cy="36" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="31" cy="24" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="31" cy="30" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="31" cy="36" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="37" cy="24" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="37" cy="30" r="2" fill="' + props.colors[0] + '"/>' + '<circle cx="37" cy="36" r="2" fill="' + props.colors[0] + '"/>' + '</svg>';

});

export default IconPhoneOne;
