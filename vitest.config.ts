// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        include: ['src/**/*.test.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['json'],
        },
    },
    resolve: {
        alias: {
            '@utils': '/src/utils',
        },
    },
});
