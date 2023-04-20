import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconHandUp: IconComponent = createIcon("HandUp", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M41 38H19V44H41V38Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0001 38C12.4812 30.8771 8.74054 26.7492 7.77829 25.6162C6.33491 23.9168 6.941 21.996 10.5532 21.996C14.1653 21.996 16.2485 27.2814 19.0001 27.2814C19.0165 27.2848 19.0176 20.5257 19.0034 7.00404C19.0017 5.3467 20.3438 4.00174 22.0012 4L22.0043 4C23.6635 4 25.0085 5.34501 25.0085 7.00417V15.0136C32.9813 16.2224 37.3158 16.8893 38.0122 17.0144C39.0567 17.2019 41.0001 18.199 41.0001 21.068C41.0001 22.9807 41.0001 27.9581 41.0001 38H19.0001Z" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</svg>';

});

export default IconHandUp;
