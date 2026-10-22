# Qualité, contrôles et limites — révision du 20 octobre 2026

**Statut : À RELIRE / À VALIDER par le pilote.** Aucun déploiement effectué.

## Révision réalisée

- Logo : copie sans modification du PNG fourni par le pilote dans `public/assets/logo-LN-IA.png`, également incorporé dans l’aperçu autonome. Ancien logo actif remplacé.
- Présentation : 22 diapositives réécrites, six chapitres, une question d’application par diapositive, trois idées principales, notes d’animation et mode projection. Liens directs vers les étapes 1–3 de l’atelier et le prompt S10. Signature du pilote conservée, y compris sur les diapositives projetées.
- Exemples : quatre scénarios professionnels entièrement fictifs. Fil rouge management (fiche d’accueil) ; enseignement (consignes d’exposé), formation (relecture de supports IA), entrepreneuriat (qualification de demande). Chaque cas expose le périmètre, les six rubriques, un critère observable et les informations à confirmer.
- Atelier : trois étapes (contexte, production, relecture), champs conservés entre les étapes, aperçu et téléchargements séparés. Une modification de la note annule la relecture et remet la grille à zéro. Les réflexions du portfolio peuvent évoluer sans annuler la relecture de la note.
- Provenance fictive conservée après reprise d’un cas, adaptation, sauvegarde et export. Le démarrage d’un sujet personnel passe par une note vierge avec confirmation d’effacement des champs.
- Navigation du logo, fragment d’URL, bouton S10, reprise du focus, lien d’évitement et annonces de copie corrigés. Un stockage malformé ne bloque plus l’atelier ; un message signale son indisponibilité.
- Polices Google supprimées ; typographie système sans chargement externe. Installation et workflow harmonisés sur `npm ci` avec le verrou de dépendances.
- Anciennes démonstrations actives remplacées ; documents d’accompagnement et synopsis harmonisés. Archives sous `ressources-selectionnees/` inchangées.

## Vérifications techniques

- `npm run check` : dix tests (syntaxe, volumes, données, statut de relecture, provenance fictive, exports, navigation, stockage, focus simulé, parcours et quiz).
- `npm run build` : compilation de production Vite.
- `node scripts/test-render.mjs` : rendu des onze rubriques avec un DOM simulé.
- `npm run standalone` : génération puis contrôle des onze rubriques autonomes, présence du PNG fourni incorporé, absence de police ou de script externe.
- Empreintes des treize archives comparées au manifeste SHA-256 local. Sans le ZIP original, ce contrôle ne certifie pas la provenance du manifeste lui-même.

Ces contrôles ne constituent pas une validation pédagogique.

## Contrôle navigateur : limite rencontrée

Le serveur Vite local démarre. La capture du navigateur Windows a été tentée avec Computer Use ; deux captures ont expiré (`FrameArrived timed out` puis `window capture timed out`) malgré la récupération de la fenêtre. Aucune action sur les pages personnelles du navigateur n’a été effectuée.

Le rendu réel sur ordinateur et mobile, le contraste mesuré, le lecteur d’écran, le plein écran, le presse-papiers et les téléchargements réels restent à contrôler. Les tests de focus et d’export utilisent un DOM simulé ; ils ne remplacent pas cette vérification.

## Limites fonctionnelles conservées

- Le site ne contacte aucune IA, ne vérifie pas les faits et n’attribue jamais de validation humaine.
- Le stockage est local au navigateur ; il peut être bloqué ou supprimé. Les fichiers exportés ne sont pas classés automatiquement.
- Quiz et checklist restent en mémoire jusqu’au rechargement ; les exporter pour conserver une trace. Le formulaire est sauvegardé lorsque le navigateur l’autorise.
- Les exports peuvent être incomplets. La déclaration de relecture est déclarative ; elle n’est pas un contrôle automatique du fond.
- La preuve S09 doit être ajoutée au portfolio existant sans écraser les autres séances.
- Les références externes S07–S08 n’ont pas été comparées à distance pendant cette révision. Aucun dépôt `.git` n’est présent pour établir un diff historique.
- Horaires à confirmer. Le pilote doit relire les contenus, les exemples et le rendu avant validation humaine.
