<template>
  <section class="landing">
    <div class="logo_box">
      <img src="../assets/driing_logo_blanc.svg" class="logo">
    </div>

    <div class="header">
      <div class="background_header"></div>
      <h3>Vos voisins sont les meilleurs !</h3>
      <form class="recherche">
        <span class="subtitle">Qu'avez vous besoins ?</span>
        <label>
          <span>
            <font-awesome-icon :icon="['fas', 'box-open']" /></span>
          <input type="text" placeholder="#voiture, #Marteau ...">
        </label>
        <span class="subtitle">Où ça ?</span>
        <label>
          <span>
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>
          <input type="text" placeholder="Lille, Bordeaux...">
        </label>
        <button type="submit">Rechercher
          <font-awesome-icon :icon="['fas', 'angle-right']" /></button>
      </form>
      <div class="signin_btn">
        <router-link to="/register">
          <button>S'inscrire</button>
        </router-link>
      </div>
    </div>

    <div class="connexion">
      <router-link to="/login">
       <button>Se connecter</button>
      </router-link>
    </div>

    <div class="how_work">
      <h3>Comment ça marche ?</h3>
    </div>
  </section>
</template>

<style scoped>
  .landing {}

  .landing .logo_box {
    position: relative;
    z-index: 2;
    height: 30vw;
    background-color: #0093e9;
    background-image: linear-gradient(90deg, #0093e9 0%, #80d0c7 100%);
    box-shadow: 0 0 10px black;
  }

  .landing .logo_box .logo {
    height: 20vw;
    margin-top: 5vw;
    position: relative;
  }

  /* ================== LANDING HEADER ============ */

  .landing .header {
    padding: 8px;
    position: relative;
  }

  .landing .header .background_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/back_landing.jpg) no-repeat center fixed;
    -webkit-background-size: cover;
    /* pour anciens Chrome et Safari */
    background-size: cover;
    /* version standardisée */
    filter: grayscale(0.5);
  }

  .landing button {
    padding: 5px;
    width: 50vw;
    height: 12vw;
    border-radius: 30px;
    border: none;
    background-color: #0093e9;
    background-image: linear-gradient(90deg, #0093e9 0%, #80d0c7 100%);
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3.5vw;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .landing .header button svg {
    margin-left: 10px;
    font-size: 7vw !important;
  }
  
  
  
  /* =============== Recherche ========= */

  .landing .header .recherche {
    padding: 10px;
    width: 72vw;
    margin: 5vw auto;
    border-radius: 10px;
    background: white;
    position: relative;
    box-shadow: 0 0 20px black;
  }

  .landing .header h3 {
    width: 90vw;
    margin: 3vw auto 2vw auto;
    font-size: 5.5vw;
    text-align: center;
    position: relative;
    color: white;
    font-weight: bold;
    text-shadow: 0 0 20px black;
  }

  .landing .header .recherche .subtitle {
    text-align: left;
    font-size: 4.5vw;
    display: block;
    margin: 2vw 0;
  }

  .landing .header .recherche label {
    display: flex;
    align-items: center;
    text-align: left;
    font-weight: normal;
    margin: 3vw 0;
    border-radius: 5px;
    border: 1.5px solid #e4e4e4;
    padding: 0 5px;
  }

  .landing .header .recherche label span {
    font-size: 4.5vw;
    width: 10%;
    display: flex;
    justify-content: center;
  }

  .landing .header .recherche label input {
    width: 90%;
    padding-left: 5px;
    margin: 2vw 0;
    width: calc(100% - 10px);
    height: 10vw;
    border: none;
    outline: 0;
  }

  .landing .header .recherche label:focus-within {
    border-color: #0093e9;

  }

  /* ===================== SIGN IN ===================== */


  .landing .header .signin_btn {
    position: relative;
    margin-top: 10vw;
  }

  .landing .header .signin_btn button {
    width: 80%;
    font-size: 4vw;
    background: #ff2c63;
    color: white;
    box-shadow: 0 0 20px #777777;
  }



  /* ======================= CONNEXION ========================== */

  .landing .connexion {
    position: fixed;
    bottom: 5vw;
    left: 25vw;
  }

</style>
