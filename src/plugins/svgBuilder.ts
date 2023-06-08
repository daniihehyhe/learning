import { Plugin } from 'vite';

export function svgBuilder(): Plugin {
  return {
    name: 'svg-builder',
    // transform(src, id) {
    //   if (id.endsWith('.svg')) {
    //     return ${JSON.stringify(src)};
    //   }
    // },
  };
}