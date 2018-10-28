//@flow
import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';

import packageJSON from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      indent: false,
    },
    external: [...Object.keys(packageJSON.peerDependencies || {})],
    plugins: [
      flow(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/es/index.js',
      format: 'es',
      indent: false,
    },
    external: [...Object.keys(packageJSON.peerDependencies || {})],
    plugins: [
      flow(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
    ],
  },
];
