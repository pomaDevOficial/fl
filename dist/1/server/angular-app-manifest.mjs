
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/html2canvas/dist/html2canvas.js": [
    {
      "path": "chunk-SOQBCYLK.js",
      "dynamicImport": false
    }
  ],
  "node_modules/dompurify/dist/purify.js": [
    {
      "path": "chunk-W2RNZCP2.js",
      "dynamicImport": false
    }
  ],
  "node_modules/canvg/lib/index.es.js": [
    {
      "path": "chunk-RFAFOZDX.js",
      "dynamicImport": false
    }
  ],
  "node_modules/flowbite/lib/esm/index.js": [
    {
      "path": "chunk-UG35GNGB.js",
      "dynamicImport": false
    }
  ],
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-LZDCHMSN.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 2937, hash: '4b8aff87c7aa261a228258a93532caca92a35d8b0e0bd1104432d1aa3c28429e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1750, hash: '7cee45748a541860ae493b17e1ef91a992ecda4b196842f88a4afd931b3ed9bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JHIUW2Q4.css': {size: 59073, hash: 'mWOSX9eJbds', text: () => import('./assets-chunks/styles-JHIUW2Q4_css.mjs').then(m => m.default)}
  },
};
