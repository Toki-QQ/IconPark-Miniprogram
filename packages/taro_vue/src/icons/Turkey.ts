import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconTurkey: IconComponent = createIcon("Turkey", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M4 36H44L39 44H9L4 36Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M11 30.0001V36.0001H37L37 31.0001C37 25.0001 34 23.0001 34 23.0001C36 20.5001 37 17.0001 34 15.0001C31 13.0001 28.5 15.0001 27 17.0001C27 17.0001 11 15.0001 11 30.0001Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M21 24C21 24 20 24.5 19 26C18 27.5 18 29 18 29" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M39 9C38.4667 9.64 35.4444 13.2667 34 15" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<circle cx="38.3557" cy="7.48259" r="2.5" transform="rotate(35.0717 38.3557 7.48259)" fill="' + props.colors[0] + '"/>' + '<circle cx="40.8108" cy="9.20646" r="2.5" transform="rotate(35.0717 40.8108 9.20646)" fill="' + props.colors[0] + '"/>' + '</svg>';

});

export default IconTurkey;
