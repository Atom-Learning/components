import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import hq from 'alias-hq'
import esbuild from 'rollup-plugin-esbuild'
import summary from 'rollup-plugin-summary'
import visualizer from 'rollup-plugin-visualizer'

import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production'
const isDebug = process.env.DEBUG === 'true'

const deps = Object.keys(pkg.dependencies || {})
const peerDeps = Object.keys(pkg.peerDependencies || {})
const externalDeps = [...deps, ...peerDeps]

export default {
  input: 'src/index.ts',
  external: externalDeps,
  output: [
    { file: pkg.main, format: 'cjs' },
    { dir: 'dist', format: 'esm', preserveModules: true }
  ],
  plugins: [
    summary({ showMinifiedSize: false, showBrotliSize: false }),
    commonjs(),
    alias({ entries: hq.get('rollup', { format: 'array' }) }),
    esbuild({
      minify: isProduction,
      target: ['chrome80', 'edge91', 'firefox78', 'ios12.2', 'safari12.1']
    }),
    resolve({ extensions: ['.ts', '.tsx'] }),
    isDebug && visualizer()
  ]
}
