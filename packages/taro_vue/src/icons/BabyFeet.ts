import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconBabyFeet: IconComponent = createIcon("BabyFeet", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M15.0001 20.6121C13.5764 26.7616 21.4929 28.327 19.6238 32.6597C17.7546 36.9923 13.5688 36.1258 14.0361 40.4584C14.5035 44.791 20.0419 44.8519 25.0837 42.2415C35.1675 37.0205 37.2708 25.6166 32.7075 20.6122C27.1002 14.4626 16.4237 14.4626 15.0001 20.6121Z" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<ellipse cx="34.5354" cy="13.5354" rx="2" ry="3" transform="rotate(40 34.5354 13.5354)" fill="' + props.colors[0] + '"/>' + '<ellipse cx="29.3807" cy="10.6032" rx="2" ry="3" transform="rotate(25 29.3807 10.6032)" fill="' + props.colors[0] + '"/>' + '<ellipse cx="23.3805" cy="9.60278" rx="2" ry="3" transform="rotate(6 23.3805 9.60278)" fill="' + props.colors[0] + '"/>' + '<ellipse cx="13.9997" cy="8.00029" rx="3" ry="4" transform="rotate(-20 13.9997 8.00029)" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '"/>' + '<ellipse cx="38.5353" cy="17.5356" rx="2" ry="3" transform="rotate(50 38.5353 17.5356)" fill="' + props.colors[0] + '"/>' + '</svg>';

});

export default IconBabyFeet;
