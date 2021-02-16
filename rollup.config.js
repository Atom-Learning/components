import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import bundleSize from 'rollup-plugin-bundle-size'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production'

const deps = Object.keys(pkg.dependencies || {})
const peerDeps = Object.keys(pkg.peerDependencies || {})

export default {
  input: 'src/index.ts',
  external: [...deps, ...peerDeps],
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'esm', sourcemap: true }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    bundleSize(),
    commonjs(),
    resolve(),
    isProduction && terser(),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true
    })
  ]
}
