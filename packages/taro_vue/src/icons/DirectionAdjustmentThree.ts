import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconDirectionAdjustmentThree: IconComponent = createIcon("DirectionAdjustmentThree", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M18 10L24 4M24 4L30 10M24 4V24M24 24V44M24 24H44M24 24H4M18 38L24 44M24 44L30 38M38 18L44 24M44 24L38 30M10 18L4 24M4 24L10 30" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconDirectionAdjustmentThree;
