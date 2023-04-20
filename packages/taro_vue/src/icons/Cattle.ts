import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconCattle: IconComponent = createIcon("Cattle", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M11.4651 19.9231C10.6818 12.4814 16.5167 6 23.9995 6C31.4823 6 37.3173 12.4814 36.5339 19.9231L35.0464 34.055C34.4513 39.7083 29.6841 44 23.9995 44C18.315 44 13.5478 39.7083 12.9527 34.0549L11.4651 19.9231Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M13.9995 31C17.4916 27.8746 25.4281 23.8297 33.9995 31" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<circle cx="18.9995" cy="18" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="20.9995" cy="34" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="28.9995" cy="18" r="2" fill="' + props.colors[2] + '"/>' + '<circle cx="26.9995" cy="34" r="2" fill="' + props.colors[2] + '"/>' + '<path d="M33 7.91262C35.1667 5.91262 40.3923 2.30498 43 4.91262C45.6077 7.5203 43 9.9126 41 10.4126C38.5 11.0376 36.8 12.7128 36 13.9128" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M15.0962 7.91262C12.9295 5.91262 7.70391 2.30498 5.09619 4.91262C2.48848 7.5203 5.09619 9.9126 7.09619 10.4126C9.59619 11.0376 11.2962 12.7128 12.0962 13.9128" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M12 25L13 34.5" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M36 25L35 34.5" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconCattle;
