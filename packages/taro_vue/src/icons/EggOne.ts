import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconEggOne: IconComponent = createIcon("EggOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M29 22.1333C29 30.9699 23.6274 36 17 36C10.3726 36 5 30.9699 5 22.1333C5 11.1634 11.3726 4 17 4C22.6274 4 29 11.1634 29 22.1333Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M29 24.0684C37.5365 24.7022 43 29.6217 43 33.9999C43 38.6894 36.732 43.9999 27.1333 43.9999C20.3603 43.9999 16.143 40.5644 15.2011 36" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconEggOne;
