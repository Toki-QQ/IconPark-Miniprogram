import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconAvocado: IconComponent = createIcon("Avocado", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M33 19C31 14 33 4 24 4C15 4 17 14 15 18C13 22 10 25 10 31C10 40 17.5 44 24 44C30.5 44 38 40 38 31C38 26 35 24 33 19Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path d="M30 30C30 33.3137 27.3137 36 24 36C20.6863 36 18 33.3137 18 30C18 26.6863 20.6863 22.5 24 22.5C27.3137 22.5 30 26.6863 30 30Z" fill="' + props.colors[3] + '" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconAvocado;
