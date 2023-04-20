import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconExperimentOne: IconComponent = createIcon("ExperimentOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M10.7769 30L18.019 15.0386V4H30.0283V15.0386L37.246 30" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M7.79433 43.673C6.16744 42.8855 5.48698 40.9282 6.27449 39.3013L10.7769 30C10.7769 30 18.0001 35 24.0001 30C30.0001 25 37.2461 30 37.2461 30L41.7352 39.3052C41.9492 39.7488 42.0603 40.2348 42.0603 40.7273C42.0603 42.5347 40.595 44 38.7876 44H9.22025C8.72636 44 8.23888 43.8882 7.79433 43.673Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconExperimentOne;