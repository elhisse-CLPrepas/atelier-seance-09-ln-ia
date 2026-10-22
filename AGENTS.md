# AGENTS.md — Atelier LN-IA séance 09

## Mission
Développer et maintenir un site Vite de formation pour le Module 03, séance 09, **Comprendre la note de cadrage courte**. Préserver l'approche héritée des ateliers 07–08 sans faire de copie littérale. Candidats : enseignants, coachs, formateurs, managers et entrepreneurs.

## Contexte canonique
Relance Automne depuis le 25/09/2026. Une semaine pédagogique commence le vendredi Comprendre et continue le lundi Pratiquer. Module 03 : S09 (23/10), S10 (26/10), S11 (30/10), S12 (02/11) ; horaires non confirmés.

## Livrables S09
`03-documents/note-cadrage-courte.md` et `07-portfolio/preuves-module-03.md`. Ne pas assimiler export, vérification automatique et validation humaine.

## Contraintes d'exécution
- Vite + JavaScript natif, sans backend, sans clé d’API.
- Ne pas publier de données privées ou de secrets ; ne jamais envoyer les champs à un service.
- Les cas affichés sont fictifs et explicitement étiquetés.
- Les documents sous `ressources-selectionnees/` sont des archives d'origine : ne pas les modifier ; intervenir sur les versions actives.
- Respecter une interface responsive, clavier, lecteur d’écran, contraste suffisant, préférence réduire les animations.
- Ne pas inventer d’heure de séance ni attribuer un statut VALIDÉ sans accord humain.
- Conserver le logo LN-IA et la signature du pilote.

## Cycle qualité
Lire les sources → proposer plan → modifier → `npm run check` → `npm run build` → contrôle navigateur → journal des limites → demande de validation humaine.
Ne pousser/merger/déployer sur GitHub qu’avec instruction explicite du pilote.
