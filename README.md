# OrellanaTech

V1 statique du site vitrine et configurateur de demande de devis pour OrellanaTech, activite locale de services informatiques autour de Grenoble.

## Ouvrir le site en local

Le site n'utilise pas de backend ni de framework.

1. Ouvrir le dossier du projet.
2. Double-cliquer sur `index.html`.
3. Tester le configurateur, le panier et le formulaire dans le navigateur.

Il est aussi possible de servir le dossier avec une extension comme Live Server dans VS Code.

## Modifier les tarifs

Les prix sont centralises dans `script.js`, au debut du fichier :

```js
const prices = {
  diagnosticPc: 15,
  optimisationPc: 35,
  reinstallWindows: 50,
  ssdRam: 30,
  montagePc: 60,
  montageWindowsDrivers: 90,
  setupSimple: 50,
  nasSimple: 70,
  domotiqueLegere: 40,
  ecranTelephone: 30,
  applicationLocale: 20
};
```

Modifier une valeur mettra a jour les estimations affichees dans le panier.

## Connecter Formspree

Le formulaire est deja prepare pour Formspree dans `index.html` :

```html
action="https://formspree.io/f/REMPLACER_PAR_MON_ID"
```

Etapes :

1. Creer un compte sur Formspree.
2. Creer un nouveau formulaire.
3. Copier l'URL fournie par Formspree.
4. Remplacer `https://formspree.io/f/REMPLACER_PAR_MON_ID` par cette URL.
5. Tester un envoi depuis le site.

Le champ cache `recapitulatif_panier` est rempli automatiquement par `script.js` avant l'envoi.

## Mettre en ligne avec Netlify

1. Creer un compte Netlify.
2. Cliquer sur "Add new site" puis "Deploy manually".
3. Glisser-deposer le dossier contenant `index.html`, `style.css`, `script.js` et `README.md`.
4. Netlify fournit une URL publique.
5. Optionnel : connecter un nom de domaine.

## Modifier les textes et services

- Textes principaux, cartes de services, formulaire : `index.html`.
- Couleurs, espacements, responsive : `style.css`.
- Categories, questions, options, prix et logique panier : `script.js`.

## Contraintes de la V1

- Pas de paiement en ligne.
- Pas de compte client.
- Pas de backend.
- Pas de base de donnees.
- Les prix sont indicatifs et le devis final est confirme apres echange.
- La domotique est limitee a la configuration d'objets connectes compatibles, sans modification d'installation electrique fixe.
