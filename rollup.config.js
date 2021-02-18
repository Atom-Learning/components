import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import bundleSize from 'rollup-plugin-bundle-size'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production'

const deps = Object.keys(pkg.dependencies || {})
const peerDeps = Object.keys(pkg.peerDependencies || {})

export default {
  input: 'src/index.ts',
  external: [...deps, ...peerDeps, './src/components/icon/svg'],
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'esm', sourcemap: true }
  ],
  plugins: [
    bundleSize(),
    commonjs(),
    resolve(),
    isProduction && terser(),
    typescript(),
    svgr()
  ],
  inlineDynamicImports: true
}
