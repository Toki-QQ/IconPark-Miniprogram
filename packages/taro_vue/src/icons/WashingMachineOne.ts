import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconWashingMachineOne: IconComponent = createIcon("WashingMachineOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<rect x="8" y="4" width="32" height="40" rx="2" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M8 12C8 13.1046 8.89543 14 10 14H38C39.1046 14 40 13.1046 40 12V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V12Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<circle cx="14" cy="9" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="20" cy="9" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="24" cy="29" r="7" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconWashingMachineOne;
