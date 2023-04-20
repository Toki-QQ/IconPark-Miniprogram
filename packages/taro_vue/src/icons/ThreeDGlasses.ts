import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconThreeDGlasses: IconComponent = createIcon("ThreeDGlasses", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M19.5996 34.5H28.3996" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '"/>' + '<path d="M2.30273 27.3909L9.95784 9.5618L14.9491 7" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M45.8045 27.6333L38.0499 9.5618L33.0586 7" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.40063 26.7998H18.717C19.4317 26.7998 20.0111 27.3792 20.0111 28.0939C20.0111 28.128 20.0098 28.1621 20.0071 28.1961L19.0797 39.9078C19.0264 40.5808 18.4647 41.0998 17.7896 41.0998H4.32803C3.65293 41.0998 3.09124 40.5808 3.03795 39.9078L2.11055 28.1961C2.05413 27.4836 2.58598 26.8603 3.29847 26.8038C3.33246 26.8012 3.36654 26.7998 3.40063 26.7998Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.2835 26.7998H44.5999C45.3146 26.7998 45.894 27.3792 45.894 28.0939C45.894 28.128 45.8926 28.1621 45.89 28.1961L44.9625 39.9078C44.9093 40.5808 44.3476 41.0998 43.6725 41.0998H30.2109C29.5358 41.0998 28.9741 40.5808 28.9208 39.9078L27.9934 28.1961C27.937 27.4836 28.4689 26.8603 29.1814 26.8038C29.2153 26.8012 29.2494 26.7998 29.2835 26.7998Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconThreeDGlasses;
