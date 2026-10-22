# LN-IA · Séance 09 — Comprendre la note de cadrage courte

**Challenge 100 JOURS — Relance Automne 2026**  
**Module 03 · Semaine 05 · vendredi 23 octobre 2026**  
**Horaire : à confirmer · Durée indicative : 90 à 120 minutes**  
**Pilotage : Prof. Abderrahman EL HISSE**  
**Statut éditorial : V1 — À RELIRE / À VALIDER**

## COMMENCER ICI

Deux façons d’ouvrir l’atelier :

1. **Immédiatement, sans installation :** ouvrir `APERCU-AUTONOME-SEANCE-09.html` (fonctionne hors ligne ; contient présentation, ateliers et visuels). 
2. **Projet Vite :** ouvrir ce dossier dans VS Code puis lancer :

   ```bash
   npm ci
   npm run dev
   ```

   **Ouvrir le site : [http://localhost:5173/](http://localhost:5173/)** une fois le serveur démarré.

### Démarrer le serveur local sous Windows

Dans le terminal intégré de VS Code, depuis ce dossier :

```powershell
npm.cmd ci
npm.cmd run dev
```

`npm.cmd ci` est nécessaire à la première installation ou après une modification des dépendances. Pour les démarrages suivants, lancez simplement `npm.cmd run dev`.

Gardez le terminal ouvert, puis cliquez sur l’un de ces liens dans l’aperçu du README (`Ctrl+Maj+V` dans VS Code) :

- [Accueil — localhost:5173](http://localhost:5173/)
- [Présentation progressive](http://localhost:5173/#slides)
- [Atelier guidé](http://localhost:5173/#atelier)

Vous pouvez aussi double-cliquer sur `LANCER-VITE-WINDOWS.bat`. Pour arrêter le serveur : `Ctrl+C` dans son terminal. Le lien localhost ouvre le site ; il ne démarre pas le serveur à lui seul.

Le port est fixé à **5173**. S’il est déjà occupé par cet atelier, utilisez le serveur existant. S’il est occupé par un autre programme, arrêtez ce programme avant de relancer l’atelier.

## Contenu du site

| Rubrique | But |
|---|---|
| Accueil | Intention, parcours, objectifs, premiers livrables |
| Présentation | **22 diapositives** en 6 étapes, questions d’application, mode projection, notes, clavier, plein écran |
| Méthode | Six rubriques et huit étapes LN-IA |
| Démonstrations | **4 cas professionnels fictifs** : management, enseignement, formation et entrepreneuriat ; 3 étapes par cas |
| Atelier | **3 étapes guidées** : contexte, production, relecture ; aperçu, sauvegarde locale et export V1 |
| Prompts | Production, correction, preuve portfolio, passage à S10 |
| Flashcards | **12** questions/réponses réversibles |
| Quiz | **10** questions avec correction et export de l’autoévaluation |
| Validation | **10** critères à cocher, statut explicite, export checklist |
| Portfolio | Retour d’expérience, export de la preuve, classement |
| Ressources | Bibliographie, sources documentaires, préparation S10 |

## Livrables du candidat

```text
mon-challenge-100-jours/
├── 02-prompts/
│   └── prompt-note-cadrage-s09.md
├── 03-documents/
│   └── note-cadrage-courte.md
└── 07-portfolio/
    └── preuves-module-03.md
```

Le navigateur télécharge les fichiers dans le dossier habituel des téléchargements. **Le participant les déplace** vers les chemins recommandés. Aucun dossier local n’est modifié automatiquement.

Les démonstrations sont **fictives**. Le site **ne dialogue pas avec une IA**, ne vérifie pas les faits et n’accorde jamais le statut « validé ». Le formulaire peut enregistrer ses champs dans le `localStorage` du navigateur. Ne pas y déposer de secrets ou données personnelles sensibles. Exporter avant de changer d’appareil.

Le cas fil rouge cadre une fiche d’accueil pour un responsable de proximité. Reprendre un cas dans l’atelier conserve sa mention fictive dans les exports. Toute modification de la note annule la déclaration de relecture. Pour rédiger un sujet personnel, commencer une note vierge après avoir exporté les champs à conserver. Ajouter la trace S09 au portfolio existant sans écraser les autres séances.

Le logo actif est `public/assets/logo-LN-IA.png`, copie du PNG fourni par le pilote. Aucune police n’est téléchargée depuis un service tiers.

## Séances du module

| Semaine | Séance | Date | Production |
|---|---|---|---|
| 05 | S09 — Comprendre | Ven. 23/10/2026 | Note de cadrage courte |
| 05 | S10 — Pratiquer | Lun. 26/10/2026 | Fiche projet V1 |
| 06 | S11 — Comprendre | Ven. 30/10/2026 | Plan de guide pratique |
| 06 | S12 — Pratiquer | Lun. 02/11/2026 | Guide pratique V1 |

## Dossiers du projet

```text
src/                       Code Vite natif (main.js, data.js, style.css)
public/assets/             Logo et affiches optimisés depuis les pièces fournies
ressources-selectionnees/  13 sources Markdown conservées sans modifications
prompts/                   Prompts maîtres de pilotage et d’atelier
exemples/                  Démonstrations fictives V1
modeles/                   Trames vierges Markdown et validation
docs/                      Guide formateur, fiche candidat, inventaire, qualité, déploiement
scripts/                   Création autonome
.github/workflows/         Déploiement GitHub Pages par GitHub Actions
APERCU-AUTONOME-SEANCE-09.html  Version sans installation
```

## Vérifications

```bash
npm run check
npm run build
npm run standalone
```

Le build Vite nécessite une installation réussie de la dépendance. `APERCU-AUTONOME-SEANCE-09.html` est généré **indépendamment** et sert de secours ou d’aperçu hors ligne. Contrôler en navigateur desktop et mobile avant publication.

## Publication GitHub Pages

Créer un dépôt (suggestion : `atelier-seance-09-ln-ia`), pousser les fichiers puis activer **Settings > Pages > Source : GitHub Actions**. Le workflow `.github/workflows/deploy-pages.yml` exécute `npm ci`, le contrôle et le build. Un déploiement est **prévu**, pas réalisé par la création de ce ZIP. Voir `docs/DEPLOIEMENT.md`.

## Provenance

Source fournie : `pack-gpt-seance-09-module-03-2026-10-20.zip`. Les Markdown sélectionnés sont recopiés sans modification dans `ressources-selectionnees/` ; les visuels WebP sont adaptés pour le site. Le nouveau site est un livrable dérivé et possède un statut propre **À RELIRE / À VALIDER**. Voir `docs/PROVENANCE-ET-CHOIX.md`.

Pour la continuité pédagogique, consulter les ateliers [S07](https://github.com/elhisse-CLPrepas/atelier-seance-07-ln-ia) et [S08](https://github.com/elhisse-CLPrepas/atelier-seance-08-ln-ia).
