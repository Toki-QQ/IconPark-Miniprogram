import type { Icon, IconSvgConfig, IconComponent } from "../runtime";

import { createIcon, getSvgConfig } from "../IconTools";

const IconXingtu: IconComponent = createIcon("Xingtu", (svgConfig: Icon): string => {
  let props: IconSvgConfig = getSvgConfig(svgConfig);

  return '<?xml version="1.0" encoding="UTF-8"?>' + '<svg width="' + props.size + '" height="' + props.size + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M15.5557 38.9998L8.17749 11.0171C8.14563 10.9011 8.16069 10.7772 8.2194 10.6722C8.27812 10.5672 8.37579 10.4895 8.49131 10.4559C8.5536 10.4332 8.62071 10.427 8.68612 10.4378C8.75154 10.4486 8.81305 10.4762 8.86468 10.5178L42.4732 38.1889C42.5582 38.2669 42.6117 38.3734 42.6235 38.4882C42.6353 38.6031 42.6047 38.7182 42.5373 38.8119C42.5082 38.8693 42.4635 38.9173 42.4084 38.9505C42.3534 38.9837 42.2901 39.0008 42.2258 38.9998H15.5557Z" fill="' + props.colors[0] + '"/>' + '<path d="M44.9797 9.58096C45.0117 9.46526 44.9969 9.34163 44.9387 9.23668C44.8804 9.13173 44.7833 9.05384 44.6682 9.01975C44.6052 8.99968 44.5382 8.99482 44.473 9.00557C44.4077 9.01632 44.3458 9.04237 44.2925 9.0816L26.1758 21.5725L39.1706 32.2516L44.9797 9.58096Z" fill="' + props.colors[0] + '"/>' + '<path d="M2.18783 38.189C2.09543 38.2603 2.03199 38.3628 2.00925 38.4773C1.98652 38.5918 2.00601 38.7107 2.06413 38.812C2.10605 38.8717 2.16208 38.9201 2.22722 38.9528C2.29237 38.9856 2.36461 39.0018 2.43751 38.9998H13.0593L11.2474 31.9423L2.18783 38.189Z" fill="' + props.colors[0] + '"/>' + '</svg>';

});

export default IconXingtu;
