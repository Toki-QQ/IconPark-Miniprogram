import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconInnerShadowUp: IconComponent = createIcon("InnerShadowUp", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M33.8996 14.1005C31.3661 11.567 27.8661 10 24.0001 10C20.1341 10 16.6341 11.567 14.1006 14.1005" stroke="' + props.colors[2] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '</svg>';

});

export default IconInnerShadowUp;
