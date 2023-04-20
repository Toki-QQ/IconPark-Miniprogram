import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconHospitalThree: IconComponent = createIcon("HospitalThree", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M11 26L11 44L37 44L37 26L24 13L11 26Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M3.58579 21.5858C2.80474 22.3668 2.80474 23.6332 3.58579 24.4142C4.36683 25.1953 5.63316 25.1953 6.41421 24.4142L3.58579 21.5858ZM24 4L25.4142 2.58579C25.0391 2.21071 24.5304 2 24 2C23.4696 2 22.9609 2.21071 22.5858 2.58579L24 4ZM41.5858 24.4142C42.3668 25.1953 43.6332 25.1953 44.4142 24.4142C45.1953 23.6332 45.1953 22.3668 44.4142 21.5858L41.5858 24.4142ZM6.41421 24.4142L25.4142 5.41421L22.5858 2.58579L3.58579 21.5858L6.41421 24.4142ZM22.5858 5.41421L41.5858 24.4142L44.4142 21.5858L25.4142 2.58579L22.5858 5.41421Z" fill="' + props.colors[0] + '"/>' + '<path d="M19 31L29 31" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M24 26V36" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconHospitalThree;
