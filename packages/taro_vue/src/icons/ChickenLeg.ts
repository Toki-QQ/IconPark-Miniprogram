import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconChickenLeg: IconComponent = createIcon("ChickenLeg", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="' + 'url(#' + props.id + '818cc704' + ')' + '">' + '<path d="M33.3748 33.8744C37.6175 29.6318 34.7891 15.4897 28.4251 9.12572C25.5966 6.29723 17.465 0.286877 8.62606 9.12565C-0.212837 17.9644 5.7977 26.0963 8.62606 28.9246C14.9901 35.2887 29.1322 38.1171 33.3748 33.8744Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M41 41C40.2533 40.2533 36.0222 36.0222 33.9999 33.9999" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<circle cx="42.193" cy="40.0713" r="2.5" transform="rotate(135 42.193 40.0713)" fill="' + props.colors[0] + '"/>' + '<circle cx="40.0719" cy="42.1924" r="2.5" transform="rotate(135 40.0719 42.1924)" fill="' + props.colors[0] + '"/>' + '<circle cx="17" cy="18" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="12" cy="21" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="17" cy="24" r="2" fill="' + props.colors[2] + '"/>' + '</g>' + '<defs>' + '<clipPath id="' + props.id + '818cc704' + '">' + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>' + '</clipPath>' + '</defs>' + '</svg>';

});

export default IconChickenLeg;
