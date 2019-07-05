**NOVAVOCAT** v3.X.X
> *v3.0.9*

Refonte du repository ***"Dashboard Avocat"***
Ceci est la partie **FRONT**

Designed by Fred

http://51.75.202.146:10120/#/

**Outils :** 
VueJS
Sass

## **Packages**

Liste des packages utilisés 

|  Nom | Lien | Description |
|--|--|--|
| FontAwsome | https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs | Pack d'icon |
| ApproveJS | https://charlgottschalk.github.io/approvejs/docs/ | Permet de contrôler la validité d'une adresse mail |
| Axios | https://www.npmjs.com/package/vue-axios | Requêtes ajax |
| VueX | https://vuex.vuejs.org/ | Store VueJS |
| Vue-router | https://router.vuejs.org/ | Système de routes |
| Vue-moment | https://www.npmjs.com/package/vue-moment | Gestion des dates (voir MomentJS) |
| Vue-paginate | https://github.com/TahaSh/vue-paginate | Pagination |
| Vue-spinner | https://github.com/greyby/vue-spinner | Set de loader |
| Vue-stripe-elements-plus | https://www.npmjs.com/package/vue-stripe-elements-plus | Stripe pour vue |
| Vue2-touch-events | https://www.npmjs.com/package/vue2-touch-events | Gestion des évènements du doigt en mobile (Voir HammerJS) |
| SplittingJS | https://splitting.js.org/ | Gestion des grilles HTML pour animations |

  
```json
  "dependencies": {
    "@fortawesome/fontawesome-free-brands": "^5.0.13",
    "@fortawesome/fontawesome-free-regular": "^5.0.13",
    "@fortawesome/fontawesome-svg-core": "^1.2.12",
    "@fortawesome/free-regular-svg-icons": "^5.6.3",
    "@fortawesome/free-solid-svg-icons": "^5.6.3",
    "@fortawesome/vue-fontawesome": "^0.1.4",
    "approvejs": "^3.1.2",
    "axios": "^0.18.0",
    "vue": "^2.5.17",
    "vue-axios": "^2.1.4",
    "vue-moment": "^4.0.0",
    "vue-paginate": "^3.6.0",
    "vue-router": "^3.0.1",
    "vue-spinner": "^1.0.3",
    "vue-stripe-elements-plus": "^0.2.9",
    "vue2-touch-events": "^1.1.2",
    "splitting": "^1.0.6",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.5.0",
    "@vue/cli-plugin-eslint": "^3.5.0",
    "@vue/cli-service": "^3.5.0",
    "@vue/eslint-config-standard": "^4.0.0",
    "babel-eslint": "^10.0.1",
    "eslint": "^5.8.0",
    "eslint-plugin-vue": "^5.0.0",
    "fibers": "^3.1.1",
    "sass": "^1.17.2",
    "sass-loader": "^7.1.0",
    "vue-template-compiler": "^2.5.21"
  }
```

--------------------------------------

## Installation de packages particuliers 

**FontAwsome** 

Pour avoir tout les icônes (fas/far), dans **package.json** et **dependencies**

Ajouter les lignes suivantes :
  
  
```json
  "dependencies": {
    "@fortawesome/fontawesome-free-brands": "^5.0.13",
    "@fortawesome/fontawesome-free-regular": "^5.0.13",
    "@fortawesome/fontawesome-svg-core": "^1.2.12",
    "@fortawesome/free-regular-svg-icons": "^5.6.3",
    "@fortawesome/free-solid-svg-icons": "^5.6.3",
    "@fortawesome/vue-fontawesome": "^0.1.4",
  },
```


Pour mettre la bonne version, **installer ncu ** et ensuite taper **ncu -u**

--------------------------------------


## SUIVIE VERSIONS




**v3.0.9**
  
 - Ajout résumé dans le tunnel
 - Retour sur le design
 
 **v3.0.8**
  
 - Ajout de la création d'une entreprise dans le tunnel
 - Raccords design
 - Débugs générales
 - Paiement amélioré
 
**v3.0.7**
  
 - Raccords design après retours
 
 **v3.0.6**
  
 - Ajout du module de récupération de mot de passe
 - Légères améliorations de la partie graphique mobile
 - Débugs généraux
 
**v3.0.5** (**Version envoyée pour la mise en prod en ligne**)
  
 - Débug paiement
 - Ajout de la redirection de fin de question


 **v3.0.4**

 - Raccordement du design par rapport à la maquette pour la version desktop
 - Ajout des icons "Bulles" (**icone attente manquant**)
 - Ajout de la visualisation des fichiers de la question
 
 
**v3.0.3**

 - Raccordement du design par rapport à la maquette pour la version desktop
 - Débug stripe


**v3.0.2**

 - Débug et modifications version mobile
 (QuestionView et tunnel)
 - Version desktop continuité
 - Raccordement du design par rapport à la maquette pour la version desktop


**v3.0.1**

 - Version mobile
 - Version desktop (Presque terminée)
