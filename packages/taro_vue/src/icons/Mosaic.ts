import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconMosaic: IconComponent = createIcon("Mosaic", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M44 36H36V44H44V36Z" fill="' + props.colors[0] + '"/>' + '<path d="M28 36H20V44H28V36Z" fill="' + props.colors[0] + '"/>' + '<path d="M12 36H4V44H12V36Z" fill="' + props.colors[0] + '"/>' + '<path d="M44 20H36V28H44V20Z" fill="' + props.colors[0] + '"/>' + '<path d="M28 20H20V28H28V20Z" fill="' + props.colors[0] + '"/>' + '<path d="M12 20H4V28H12V20Z" fill="' + props.colors[0] + '"/>' + '<path d="M44 4H36V12H44V4Z" fill="' + props.colors[0] + '"/>' + '<path d="M28 4H20V12H28V4Z" fill="' + props.colors[0] + '"/>' + '<path d="M12 4H4V12H12V4Z" fill="' + props.colors[0] + '"/>' + '<path d="M20 12H12V20H20V12Z" fill="' + props.colors[0] + '"/>' + '<path d="M20 28H12V36H20V28Z" fill="' + props.colors[0] + '"/>' + '<path d="M36 12H28V20H36V12Z" fill="' + props.colors[0] + '"/>' + '<path d="M36 28H28V36H36V28Z" fill="' + props.colors[0] + '"/>' + '</svg>';

});

export default IconMosaic;
