import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconDuck: IconComponent = createIcon("Duck", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M12 7.99964C8.94774 12.5171 6.01307 13.8091 4 12.9992C4.54274 14.8333 8.44257 17.3755 10.9274 18.838C11.9978 19.4679 12.3095 20.9029 11.5649 21.897C10.2021 23.7164 8.31564 26.289 8 27.0001C0.954271 39.7887 16.482 44.6479 24 44.0001C46.1437 42.0918 45.3551 24.8027 42 18.0001C33.9477 31.9941 21.5186 23.9154 22 21C22.4814 18.0846 25.7922 18.6647 27 14C29.0131 4.76782 16.3737 0.398938 12 7.99964Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M19 31C21.5 34.5 29 38 35 33" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="17" cy="12" r="2" fill="' + props.colors[2] + '"/>' + '</svg>';

});

export default IconDuck;
