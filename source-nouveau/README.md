# Source du site (React + Vite + Tailwind)

Le site publié est le fichier `index.html` à la racine du dépôt (build en un seul fichier).

    cd source-nouveau
    npm ci
    npx vite build
    cp dist/index.html ../index.html

Contenu modifiable : `src/data/content.ts` (téléphone, services, FAQ, références, avis Google).
Avis : uniquement de vrais avis Google. FAQ : mettre à jour aussi le JSON-LD de `index.html`.
Ancienne version du site : `/ancien/` (non indexée).
