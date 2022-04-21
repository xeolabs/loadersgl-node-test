import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy'
import json from '@rollup/plugin-json';

export default {
    input: './src/parseGLTF.js',
    output: [
        {
            file: './dist/parseGLTF.cjs.js',
            include: '/node_modules/',
            format: 'cjs',
            name: 'bundle2'
        }
    ],
    plugins: [
        resolve({
            browser: false,
            preferBuiltins: true,
          //  mainFields: ['browser','main']
        }),
        json(),
        commonjs()
    ]
}