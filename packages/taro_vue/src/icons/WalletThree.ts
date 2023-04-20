import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconWalletThree: IconComponent = createIcon("WalletThree", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M39 16V9C39 7.34315 37.6569 6 36 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34314 42 9 42H36C37.6569 42 39 40.6569 39 39V32" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<rect x="22" y="16" width="20" height="16" rx="3" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 30 24)" fill="' + props.colors[2] + '"/>' + '</svg>';

});

export default IconWalletThree;
