<template>
  <div class="signin">
    <div class="background"></div>
    <div class="contenu">
      <div class="logo_box">
        <img class="logo" src="../assets/driing_logo_couleurs.svg">
      </div>
      <form class="formulaire" @submit.prevent="signIn" :class="hasSign ? 'display--none' : ''">
        <h3>Inscription</h3>
        <div :class="!second_form ? '' : 'is--active'" v-hammer:swipe.left="swipeLeft">
          <label>
            <span><font-awesome-icon :icon="['fas', 'user']" /></span>
            <input type="text" placeholder="Nom" v-model="nom">
          </label>
          <div class="divider"></div>
          <label>
            <span><font-awesome-icon :icon="['fas', 'user']" /></span>
            <input type="text" placeholder="Prénom" v-model="prenom">
          </label>
          <div class="divider"></div> 
          <label>
            <span><font-awesome-icon :icon="['fas', 'at']" /></span>
            <input type="text" placeholder="Email" v-model="email">
          </label>
          <label>
            <span><font-awesome-icon :icon="['fas', 'key']" /></span>
            <input type="password" placeholder="Mot de passe" v-model="password">
          </label>
<!--
          <div class="button" v-on:click="changeForm()">
            Continuer 
          </div>   
-->
        </div> 
        <div :class="second_form ? '' : 'is--active'" v-hammer:swipe.right="swipeRight">
          <label>
            <span><font-awesome-icon :icon="['fas', 'calendar']" /></span>
            <Datepicker v-model="date_naissance"></Datepicker>
          </label>
          <div class="divider"></div>
          <label>
            <span><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>
            <input type="number" placeholder="Code Postal" v-model="code_postal">
          </label>
          <div class="divider"></div> 
          <label>
            <span><font-awesome-icon :icon="['fas', 'city']" /></span>
            <input type="text" placeholder="Ville" v-model="ville">
          </label>
          <div class="divider"></div>
          <textarea placeholder="Décrivre vous !" v-model="description"></textarea>
<!-- 
          <div class="button back" v-on:click="changeForm()">
            Retour
          </div> 
-->
          <button type="submit">
            S'inscrire 
          </button>        
        </div>
        <div class="dot">
          <div v-on:click="swipeRight()" :class="!second_form ? 'dot_is--active' : ''"></div>
          <div v-on:click="swipeLeft()" :class="second_form ? 'dot_is--active' : ''"></div>
        </div>
        <router-link to="/login">
          <span class="no_account">Déjà un compte ? Cliquez ici !</span>
        </router-link>
      </form>
      
      
      <div class="after_sign" :class="!hasSign ? 'display--none' : ''">
        <h3>Votre compte a bien été crée !</h3>
        <div>
          <router-link to="/login">
            <button>Se connecter</button>
          </router-link>
          <router-link to="/landing">
            <button>Rechercher un service</button>
          </router-link>
        </div>
      </div>
      
      <router-link to="/">
        <button class="back">
          <font-awesome-icon :icon="['fas', 'angle-left']" /> Accueil
        </button>      
      </router-link>
    </div>
  </div>
</template>



<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';    
  import {api} from '../Api.js';
  import axios from 'axios';
  import Datepicker from 'vuejs-datepicker';
  
  export default {
    name: "signin",
    components: {
      Datepicker
    },
    data() {
      return {
        second_form: false,
        hasSign: false,
        
        nom: "",
        prenom: "",
        email: "",
        password: "",
        date_naissance: "",
        code_postal: "",
        ville: "",
        description: "",
      }
    },
    methods: {
      changeForm: function() {
        this.second_form = !this.second_form;
      },
      swipeLeft: function() {
        this.second_form = true;
      },
      swipeRight: function() {
        this.second_form = false;
      },
      signIn: function() {
        var sendSign = {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          password: this.password,
          date_naissance: this.date_naissance,
          code_postal: this.code_postal,
          ville: this.ville,
          description: this.description
        };
       var _this = this;
       axios.post(api.user.signIn, sendSign)
        .then(function (response) {
          _this.hasSign = true;
        })
        .catch(function (error) {
        }); 
      },
    }, 
  };

</script>






<style scoped>
  .signin .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    -webkit-clip-path: polygon(100% 18%, 100% 100%, 0 100%, 0 63%);
    clip-path: polygon(100% 18%, 100% 100%, 0 100%, 0 63%); 
    background-color: #0093e9;
    background-image: linear-gradient(90deg, #0093e9 0%, #80d0c7 100%);
  }
  
  .signin .contenu {
    position: relative;
    padding: 0 0 10px 0;
  }
  
  .signin {
    width: 100vw;
    height: 100vh;
  }

  .signin .logo_box {
    position: relative;
    z-index: 2;
    height: 30vw;
  }

  .signin .logo_box .logo {
    height: 20vw;
    margin-top: 5vw;
    position: relative;
  }


  /* ======= FORMULAIRE ====== */

  .signin .formulaire {
    width: calc(85vw - 20px);
    padding: 20px 10px;
    margin: 5vw auto 10vw auto;
    text-align: left;
    background: white;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 10px #bdbdbd;
    box-shadow: 0 0 10px #bdbdbd;
  }

  .signin .formulaire h3 {
    margin: 1vw 0 -2vw 0;
    font-weight: normal;
  }

  .signin .formulaire .divider {
    margin: 2vw 0;
  }

  .signin .formulaire label {
    display: flex;
    align-items: center;
    height: 14vw;
    background: white;
    border-radius: 5px;
    margin-top: 4vw;
    border: 2px solid rgb(242, 242, 242);
  }

  .signin .formulaire label span {
    width: 15%;
    display: flex;
    justify-content: center;
  }

  .signin .formulaire label input {
    width: 85%;
    background: transparent;
    font-weight: bold;
    border: none;
    outline: 0;
  }
  
  .signin .formulaire textarea {
    width: calc(100% - 25px);
    resize: none;
    height: 30vw;
    background: transparent;
    font-weight: bold;
    outline: 0;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid rgb(242, 242, 242);
  }

  .signin .formulaire .button {
    padding: 5px;
    width: 50vw;
    height: 8vw;
    border-radius: 30px;
    border: none;
    background: #ff2c63;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3.5vw;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5vw auto;
    -webkit-box-shadow: 0 3px 10px #b3b3b3;
    box-shadow: 0 3px 10px #b3b3b3;
  }
  
  .signin .formulaire button {
    padding: 5px;
    width: 50vw;
    height: 13vw;
    border-radius: 30px;
    border: none;
    background: #ff2c63;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3.5vw;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5vw auto;
    -webkit-box-shadow: 0 3px 10px #b3b3b3;
    box-shadow: 0 3px 10px #b3b3b3;
  }
  
  .signin .formulaire .button.back {
    background: white;
    color: black;
  }

  .signin .formulaire .no_account {
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 6vw 0 5vw 0;
    font-size: 13px;
    color: black;
  }
  
  
  /* ============= dots =========== */
  
  
  .signin .dot {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .signin .dot div {
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    margin: 2vw;
    border: 2px solid rgb(222, 222, 222);
  }
  
  .signin .dot .dot_is--active {
    border: none;
    background: #6c6c6c;
  }
  
  /* ============= Back button =========== */
  
  .signin .back {
    padding: 5px;
    width: 50vw;
    height: 12vw;
    border-radius: 30px;
    border: none;
    background: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3.5vw;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;    
  }
  
  .signin .back svg {
    margin-right: 10px;
    font-size: 5vw;
  }
  
  /* ============= after_sign =========== */
  
  .signin .after_sign {
    width: calc(85vw - 20px);
    padding: 20px 10px;
    margin: 5vw auto 10vw auto;
    text-align: left;
    background: white;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 10px #bdbdbd;
    box-shadow: 0 0 10px #bdbdbd;    
  }
  
  /* ============= transition class =========== */
  
  .signin .is--active {
    display: none;
  }
  
  .signin .display--none {
    display: none;
  }
</style>
