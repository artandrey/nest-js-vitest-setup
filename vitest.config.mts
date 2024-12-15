import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

export default defineConfig({
  test: {
    globals: true,
    root: './',
    include: ['src/**/*.spec.ts'],
    exclude: ['test/**/*'],
    coverage: {
      include: ['src/**/*.ts'],
      exclude: [
        'src/main.ts',
        'src/**/*.module.ts',
        '**/*.spec.ts',
        '**/*.e2e-spec.ts',
      ],
      provider: 'v8',
    },
  },
  plugins: [swc.vite()],
});
