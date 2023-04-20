import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconVirgo: IconComponent = createIcon("Virgo", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M30 17C34 17 41.0879 16.8877 41.9586 23.6392C42.417 27.1934 39.2376 32.6747 24 43.0005" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M16 11C16 12.1046 16.8954 13 18 13C19.1046 13 20 12.1046 20 11H16ZM4 11C4 12.1046 4.89543 13 6 13C7.10457 13 8 12.1046 8 11H4ZM8 11C8 8.79086 9.79086 7 12 7V3C7.58172 3 4 6.58172 4 11H8ZM12 7C14.2091 7 16 8.79086 16 11H20C20 6.58172 16.4183 3 12 3V7Z" fill="' + props.colors[0] + '"/>' + '<path d="M28 11C28 12.1046 28.8954 13 30 13C31.1046 13 32 12.1046 32 11H28ZM16 11C16 12.1046 16.8954 13 18 13C19.1046 13 20 12.1046 20 11H16ZM20 11C20 8.79086 21.7909 7 24 7V3C19.5817 3 16 6.58172 16 11H20ZM24 7C26.2091 7 28 8.79086 28 11H32C32 6.58172 28.4183 3 24 3V7Z" fill="' + props.colors[0] + '"/>' + '<path d="M6 11V29" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M18 11V29" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M30 11V29C30 34 32.5 39 42 39" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '</svg>';

});

export default IconVirgo;