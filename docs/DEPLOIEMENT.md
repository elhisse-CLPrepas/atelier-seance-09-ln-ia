# Lancer et publier avec Vite + GitHub Pages

## Démarrage Windows
Ouvrir le dossier dans VS Code, puis utiliser le terminal intégré :

```powershell
npm.cmd ci
npm.cmd run dev
```

Si PowerShell bloque `npm.ps1`, la syntaxe `npm.cmd` contourne le lancement du script PowerShell. `LANCER-VITE-WINDOWS.bat` permet également de démarrer.

## Construire

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run preview
```

Vérifier le site, les images, le parcours mobile, les liens et les téléchargements. Le paramètre `base: './'` dans `vite.config.js` rend les ressources compatibles avec un sous-dossier GitHub Pages.

## GitHub
Ces étapes ne sont à exécuter qu’après instruction explicite du pilote. La présence du workflow ne constitue pas une autorisation de publication.

1. Créer `atelier-seance-09-ln-ia` dans le compte GitHub souhaité.
2. Initialiser un dépôt local `git init` puis créer un commit après revue des sources.
3. Pousser vers `main`.
4. Dans **Settings > Pages**, choisir **GitHub Actions**.
5. Consulter l'exécution `Deploy Vite site to Pages` dans Actions.
6. Ouvrir l'URL publiée et tester la présentation, l'atelier et les exports.

L'URL probable selon le compte est `https://elhisse-clprepas.github.io/atelier-seance-09-ln-ia/` ; ce n’est **pas** une URL de publication vérifiée.

Le ZIP ne contient ni mot de passe ni clé API. Ne pas publier des notes personnelles des participants dans le dépôt public.
