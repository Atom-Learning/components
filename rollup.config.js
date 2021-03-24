import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import svgr from '@svgr/rollup'
import bundleSize from 'rollup-plugin-bundle-size'
import embedCSS from 'rollup-plugin-embed-css'
import { terser } from 'rollup-plugin-terser'
import url from 'rollup-plugin-url'

import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production'

const deps = Object.keys(pkg.dependencies || {})
const peerDeps = Object.keys(pkg.peerDependencies || {})

export default {
  input: 'src/index.ts',
  external: [...deps, ...peerDeps, 'react-player/vimeo'],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
  ],
  plugins: [
    bundleSize(),
    commonjs(),
    embedCSS(),
    resolve(),
    isProduction && terser(),
    svgr(),
    typescript(),
    url()
  ]
}
