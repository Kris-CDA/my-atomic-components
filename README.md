Importer un Web Component PReact dans un autre projet
--------
// Avant de suivre ces étapes, lancer la commande *npm run build* 
pour générer un repertoire "dist" dans le projet où le Web Component a été créé.
Le répertoire **"dist"** doit contenir une dossier **"lib"** contenant la liste des composants, un fichier index.d.ts et trois différents types de modules exportables. 

1) Créer un nouveau projet test.
2) Insérer le fichier *'style.css'* du repertoire **"dist"** dans ce nouveau projet test.
3) Insérer le fichier *'index.iife.js'* du repertoire **"dist"** dans ce nouveau projet test.
4) Créer un fichier html avec ses balises basiques (HTML, HEAD, BODY).
5) Appeler la feuille de style *'style.css'* et le script *'index.iife.js'* dans le fichier html.
6) Insérer le Web Component dans le body, en appelant sa balise.

Exemple :

_**<ev-button>Hello</ev-button>**_

7) Pour personnaliser notre Web Component, on peut ajouter des attributs dans sa balise.

Exemple:

_**<ev-button variant="cta" element-type="span">HeToto</ev-button>**_

// *variant* est une propriété d'Adobe Spectrum permettant de changer le style de notre bouton.

// *element-type* permet de personaliser le type HTML de notre bouton (span, bouton, a, etc..).