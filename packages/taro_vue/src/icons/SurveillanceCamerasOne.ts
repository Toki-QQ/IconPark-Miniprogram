import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconSurveillanceCamerasOne: IconComponent = createIcon("SurveillanceCamerasOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M6 26V42" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M6 33H13L17 27" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M7 20L33.4735 37.649C33.795 37.8633 34.2113 37.8732 34.5426 37.6744L44 32" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M7.07803 12.7187C6.53288 12.3553 6.47867 11.5745 6.96837 11.1392L14.4279 4.50854C14.7655 4.20843 15.2624 4.17193 15.6403 4.41949L42.7046 22.1513C43.312 22.5493 43.3061 23.4416 42.6935 23.8314L33.5496 29.6503C33.2155 29.8629 32.7875 29.8583 32.458 29.6387L7.07803 12.7187Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '</svg>';

});

export default IconSurveillanceCamerasOne;
