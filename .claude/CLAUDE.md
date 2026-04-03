# wincorp-linkedin-bs — Interface scraping/BS LinkedIn (EN PAUSE)

## ÉTAT DU PROJET

Application Next.js 14 / React 18 / Tailwind 3 / TypeScript.
État : scaffolding créé, développement non démarré ou très préliminaire.
Pas de tests, pas de CI, pas de déploiement actif.

## NE PAS TOUCHER

- `node_modules/` — ne jamais versionner
- Aucun fichier métier critique identifié à ce stade

## À FAIRE

1. Définir le périmètre exact : scraping LinkedIn ? parsing BeautifulSoup ? clarifier avant de coder
2. Documenter l'objectif dans README.md

## RÈGLES MÉTIER

- Stack imposée : Next.js 14, React 18, Tailwind 3, TypeScript strict, Node.js 20+
- Pas de données client LinkedIn dans le repo (RGPD)

## CONVENTIONS DE CODE

- TypeScript strict, commentaires FR, fonctions EN
- Composants dans `src/components/`, logique dans `src/lib/`

## ERREURS CONNUES

Aucune — projet non démarré.

## Spec-Driven Development (SDD)

Ce projet suit le framework SDD. Voir `wincorp-docs/SPEC-DRIVEN-DEVELOPMENT.md`.
Specs locales dans `specs/`. Template : `specs/_SPEC-TEMPLATE.md`.
