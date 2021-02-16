import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [commonjs(), peerDepsExternal(), resolve(), typescript()]
  },
  // ES module build
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'esm', sourcemap: true }
    ],
    plugins: [commonjs(), peerDepsExternal(), resolve(), terser(), typescript()]
  }
]
