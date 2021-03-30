import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import bundleSize from 'rollup-plugin-bundle-size'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'

import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production'
const debug = process.env.DEBUG === 'true'

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
    resolve(),
    isProduction && terser(),
    typescript(),
    debug && visualizer()
  ]
}
