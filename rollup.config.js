//@flow
/**
 * 99% of this was taken from the main redux github repo to stay consistent with their build configuration
 * https://github.com/reduxjs/redux
 * https://github.com/reduxjs/redux/blob/master/rollup.config.js
 */

import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import { eslint } from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';

export default [
  // CommonJS
  {
    input: 'src/index.js',
    output: {
      file: 'dist/lib/react-redux-hooks.js',
      format: 'cjs',
      indent: false,
      globals: {
        react: 'React',
        redux: 'Redux'
      }
    },
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      eslint(),
      flow(),
      babel({
        runtimeHelpers: true
      })
    ]
  },

  // ES
  {
    input: 'src/index.js',
    output: {
      file: 'dist/es/react-redux-hooks.js',
      format: 'es',
      indent: false,
      globals: {
        react: 'React',
        redux: 'Redux'
      }
    },
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      eslint(),
      flow(),
      babel({
        runtimeHelpers: true
      })
    ]
  },

  // UMD Development
  {
    input: 'src/index.js',
    output: {
      file: 'dist/umd/react-redux-hooks.js',
      external: [
        ...Object.keys(pkg.peerDependencies || {}),
      ],
      format: 'umd',
      name: 'react-redux-hooks',
      indent: false,
      globals: {
        react: 'React',
        redux: 'Redux'
      }
    },
    plugins: [
      nodeResolve(),
      eslint(),
      flow(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  },

  // UMD Production
  {
    input: 'src/index.js',
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    output: {
      file: 'dist/umd/react-redux-hooks.min.js',
      format: 'umd',
      name: 'react-redux-hooks',
      indent: false,
      globals: {
        react: 'React',
        redux: 'Redux'
      }
    },
    plugins: [
      nodeResolve(),
      eslint(),
      flow(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  }
];