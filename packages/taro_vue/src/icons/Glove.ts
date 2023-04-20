import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconGlove: IconComponent = createIcon("Glove", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M8 42H35.8333V34C35.8333 34 41 20.5823 42 18C43 15.4177 41.5 12.6651 38 13C34.5 13.3349 31.1111 21.3291 31.1111 21.3291C31.1111 21.3291 30.5 13 30 10.5C29.5 8 29 4 19.3056 4C9.61111 4 8 11.1203 8 15V42Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconGlove;
