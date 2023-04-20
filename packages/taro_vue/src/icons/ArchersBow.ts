import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconArchersBow: IconComponent = createIcon("ArchersBow", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="' + 'url(#' + props.id + 'c8d897c6' + ')' + '">' + '<path d="M40.8505 43.9205L39.2762 43.6056C36.9266 43.1357 35.856 39.9987 36.6027 37.7219C38.5571 31.7629 37.1246 24.1116 36.3326 20.8093C36.0869 19.7845 35.2752 19.0154 34.2529 18.7598L31.9902 18.1941C30.9153 17.9254 30.0761 17.0862 29.8074 16.0113L29.2417 13.7486C28.9861 12.7262 28.217 11.9146 27.1922 11.6688C23.8899 10.8769 16.2385 9.4444 10.2795 11.3988C8.00278 12.1455 4.86576 11.0749 4.39585 8.72533L4.08097 7.15096" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M6 11L38 43" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M12 36L43 5" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</g>' + '<defs>' + '<clipPath id="' + props.id + 'c8d897c6' + '">' + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>' + '</clipPath>' + '</defs>' + '</svg>';

});

export default IconArchersBow;
