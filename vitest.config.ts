// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            provider: 'istanbul',  // utilise c8 comme outil de couverture
            reporter: ['html', 'text'],  // génère des rapports en HTML et affiche les résumés dans la console
            all: true,  // inclut tous les fichiers dans le rapport de couverture, pas seulement ceux testés
            include: ['src/**/*.ts'],  // inclure les fichiers à couvrir
            exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts', 'tests/**'],  // exclure les tests et certains dossiers
        }
    },
})
