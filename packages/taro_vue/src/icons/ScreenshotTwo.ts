import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconScreenshotTwo: IconComponent = createIcon("ScreenshotTwo", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M4 24V4H44V24" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 44C13.3137 44 16 41.3137 16 38C16 34.6863 13.3137 32 10 32C6.68629 32 4 34.6863 4 38C4 41.3137 6.68629 44 10 44Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M36 12C20.3905 33.2663 15.8047 40.6805 14.2426 42.2426C11.8995 44.5858 8.10047 44.5858 5.75732 42.2426" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M38 44C41.3137 44 44 41.3137 44 38C44 34.6863 41.3137 32 38 32C34.6863 32 32 34.6863 32 38C32 41.3137 34.6863 44 38 44Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M42.2426 42.2426C39.8995 44.5858 36.1005 44.5858 33.7574 42.2426C32.1953 40.6805 27.6095 33.2663 12 12" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconScreenshotTwo;
