import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconRattleOne: IconComponent = createIcon("RattleOne", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<g clip-path="' + 'url(#' + props.id + 'a2719de9' + ')' + '">' + '<circle cx="29.4632" cy="16.9889" r="11" transform="rotate(40 29.4632 16.9889)" fill="' + props.colors[1] + '" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M38.5327 23.2932C38.5327 23.2932 32.8973 23.7862 27.535 19.2867C22.1727 14.7872 21.6797 9.15186 21.6797 9.15186" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M26.8655 27.8629C23.4051 28.8755 21.7981 30.7906 20.1911 32.7057C18.5842 34.6208 18.5093 37.8215 16.5809 40.1196C14.6526 42.4178 11.8349 42.6643 9.53676 40.7359C7.23863 38.8076 6.99211 35.9899 8.92048 33.6918C10.8488 31.3936 13.9879 30.7641 15.5949 28.849C17.2018 26.9339 18.8088 25.0188 19.2051 21.4351" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '<path d="M38.832 10.4903C39.897 9.22108 39.7314 7.32882 38.4622 6.26381C37.193 5.19881 35.3007 5.36436 34.2357 6.63358" stroke="' + props.colors[0] + '" stroke-width="' + props.strokeWidth + '" stroke-linecap="' + props.strokeLinecap + '" stroke-linejoin="' + props.strokeLinejoin + '"/>' + '</g>' + '<defs>' + '<clipPath id="' + props.id + 'a2719de9' + '">' + '<rect width="48" height="48" fill="' + props.colors[2] + '"/>' + '</clipPath>' + '</defs>' + '</svg>';

});

export default IconRattleOne;
