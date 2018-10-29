{
  "presets": ["@babel/env", "@babel/preset-flow", "@babel/preset-react"],
  "plugins": [
    "@babel/plugin-proposal-export-namespace-from",
    ["@babel/plugin-transform-runtime",   {
      "corejs": false,
      "helpers": true,
      "regenerator": true,
      "useESModules": true,
    }],
    plugins: [
      '@babel/proposal-object-rest-spread',
      NODE_ENV === 'test' && '@babel/transform-modules-commonjs'
    ].filter(Boolean)
  ]
}
