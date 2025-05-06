import * as esbuild from 'esbuild';

await esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: 'node',
    sourcemap: false,
    format: 'cjs',
    outdir: 'dist',
    legalComments: 'none',
  },
)