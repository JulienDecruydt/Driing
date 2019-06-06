<template>
  <div class="login">
    <div class="background"></div>
    <div class="contenu">
      <div class="logo_box">
        <img class="logo" src="../assets/driing_logo_couleurs.svg">
      </div>
      <form class="formulaire" @submit.prevent="goLogin">
        <h3>Connexion</h3>
        <label>
          <span><font-awesome-icon :icon="['fas', 'at']" /></span>
          <input type="text" placeholder="Email" v-model="email">
        </label>
        <div class="divider"></div>
        <label>
          <span><font-awesome-icon :icon="['fas', 'key']" /></span>
          <input type="password" placeholder="Mot de passe" v-model="password">
        </label>
        <span class="error_message">{{ error_message }}</span>
        <button type="submit">
          <clip-loader v-if="loading" color="white" size="4vw"></clip-loader>
          <span v-else>Se connecter</span>
        </button>
        <router-link to="/register">
          <span class="no_account">Pas encore de compte ? Cliquez ici !</span>
        </router-link>
      </form>
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
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
  
  export default {
    name: "login",
    components: {
      ClipLoader
    },
    data() {
      return {
        email: "",
        password: "",
        loading: false,
        error_message: "",
      }
    },
    methods: {
      ...mapMutations([
        "setLog",
      ]), 
      ...mapMutations("user", [
        "setUser",
      ]),
      goLogin: function() {
        this.error_message = "";
        if(this.email != "" && this.password != "") {
          var sendLog = {
            email: this.email,
            password: this.password
          };
          var _this = this;
          this.loading = true;
          axios.post(api.user.connect, sendLog)
          .then(function (response) {
           if(response.data.etat == "connecté") {
             localStorage.setItem("email", _this.email);
             localStorage.setItem("password", _this.password);             
             _this.setLog(true);
             _this.$router.push({ name: "homepage"});
             _this.loading  = false;
             _this.email = "";
             _this.password = "";
             _this.setUser(response.data.user);
           } else {
             _this.error_message = "L'email ou le mot de passe est incorrect";
             _this.password = "";
             _this.loading = false;
           }
          })
          .catch(function (error) {
            _this.error_message = "Une erreur s'est produite";
            _this.loading = false;
            _this.email = "";
            _this.password = "";
          });           
        } else {
          this.error_message = "Veuillez remplir tout les champs";
        }        
      },
    }, 
    mounted: function() {
      if(localStorage.getItem('email') != null) {
        this.email = localStorage.getItem('email');
        this.password = localStorage.getItem('password');
        this.goLogin();
      }
    }
  };

</script>






<style scoped>
  .login .background {
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
  
  .login .contenu {
    position: relative;
  }
  
  .login {
    width: 100vw;
    height: 100vh;
  }

  .login .logo_box {
    position: relative;
    z-index: 2;
    height: 30vw;
  }

  .login .logo_box .logo {
    height: 20vw;
    margin-top: 5vw;
    position: relative;
  }
  
  .login .error_message {
    margin-top: 15px;
    font-size: 4vw;
    text-align: center;
    display: block;
    color: red;
  }


  /* ======= FORMULAIRE ====== */

  .login .formulaire {
    width: calc(85vw - 20px);
    padding: 20px 10px;
    margin: 10vw auto;
    text-align: left;
    background: white;
    border-radius: 5px;
    -webkit-box-shadow: 0 0 10px #bdbdbd;
    box-shadow: 0 0 10px #bdbdbd;
  }

  .login .formulaire h3 {
    margin: 1vw 0 -2vw 0;
    font-weight: normal;
  }

  .login .formulaire .divider {
    margin: 2vw 0;
  }

  .login .formulaire label {
    display: flex;
    align-items: center;
    height: 14vw;
    background: white;
    border-radius: 5px;
    margin-top: 4vw;
    border: 2px solid rgb(242, 242, 242);
  }

  .login .formulaire label span {
    width: 15%;
    display: flex;
    justify-content: center;
  }

  .login .formulaire label input {
    width: 85%;
    background: transparent;
    font-weight: bold;
    border: none;
    outline: 0;
  }

  .login .formulaire button {
    padding: 5px;
    width: 50vw;
    height: 12vw;
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
  }

  .login .formulaire .no_account {
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 6vw 0 0 0;
    font-size: 13px;
    color: black;
  }
  
  
  
  /* ============= Back button =========== */
  
  .login .back {
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
  
  .login .back svg {
    margin-right: 10px;
    font-size: 5vw;
  }
</style>
