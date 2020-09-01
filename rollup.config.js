import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: "src/index.js",
    output: {
      file: "build/bundle.js",
      sourcemap: true,
      format: "iife"
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: true,
      })
    ]
  }
]
