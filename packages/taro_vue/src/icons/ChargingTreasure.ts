import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconChargingTreasure: IconComponent = createIcon("ChargingTreasure", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M9.97506 8.55657C10.1946 7.08729 11.4565 6 12.9421 6H35.9778C37.4979 6 38.7778 7.13694 38.9569 8.64644L42.102 35.1464C42.3138 36.9309 40.9199 38.5 39.1229 38.5H8.98167C7.14822 38.5 5.74362 36.8699 6.01462 35.0566L9.97506 8.55657Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<rect x="6" y="30" width="36" height="12" rx="6" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<rect x="19" y="34" width="4" height="4" rx="2" fill="' + props.colors[2] + '"/>' + '<path d="M29 36H35" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M22 12H26" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconChargingTreasure;
