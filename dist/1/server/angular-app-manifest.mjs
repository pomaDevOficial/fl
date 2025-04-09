
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
    'index.csr.html': {size: 2937, hash: '8bff655b9ab166048c8eb9298006340f0f8b19f43e0011f5466dfb7f9e9ec9ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1750, hash: 'f523ae1f5fd7e607db7468642a5fbb865464174dbf1d6f4990d12d29b16b5bbb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JHIUW2Q4.css': {size: 59073, hash: 'mWOSX9eJbds', text: () => import('./assets-chunks/styles-JHIUW2Q4_css.mjs').then(m => m.default)}
  },
};
