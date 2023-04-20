import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconMailDownload: IconComponent = createIcon("MailDownload", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M10 18H4V42H44V18H38" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M38 6H10V22.5L24 33L38 22.5V6Z" fill="' + props.colors[1] + '"/>' + '<path d="M10 22.5L24 33L38 22.5M10 22.5V6H38V22.5M10 22.5L4 18M38 22.5L44 18" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M19 19L24 24M24 24L29 19M24 24V13" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconMailDownload;
