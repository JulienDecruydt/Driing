**Driing front** v1.X.X
> *v1.0.0*

http://decruydtjulien.fr/driing

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




**v1.0.0**
  
 - Login
 - Inscription
 - Dashboard
 - Tickets / communautés / groupe / profil
