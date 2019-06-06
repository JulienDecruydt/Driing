<template>
  <form class="recherche" :class="open ? 'is--active' : '' ">
    <div class="in">
      <span class="subtitle">Qu'avez vous besoins ?</span>
      <label>
        <span>
          <font-awesome-icon :icon="['fas', 'box-open']" /></span>
        <input type="text" placeholder="#Voiture, #Marteau ...">
      </label>
      <span class="subtitle">Où ça ?</span>
      <label>
        <span>
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>
        <input type="text" placeholder="Lille, Bordeaux...">
      </label>
      <button type="submit">Rechercher
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </button>     
    </div>
  </form>
</template>


<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  
  export default {
    name: "statichome",
    data() {
      return {
        open: false,
      }
    },
    computed: {
      ...mapGetters("user", [
        "getUser",
      ]),      
    },
    methods: {
      openIt: function() {
        this.open = !this.open;
      },
    }
  };

</script>



<style lang="scss" scoped>
    .recherche {
      width: 100%;
      height: 0;
      overflow-y: scroll;
      margin: 0vw auto;
      position: relative;
      text-align: center;  
      transition: all .3s ease;
      
      &.is--active {
        height: 260px;
        margin: 5vw auto;
      }
      
      .in {
        padding: 0 10px;
      }
      
      .subtitle {
        text-align: left;
        font-size: 4.5vw;
        display: block;
        margin: 2vw 0;
      }      
      
     label {
        display: flex;
        align-items: center;
        text-align: left;
        font-weight: normal;
        margin: 3vw 0;
        border-radius: 5px;
        border: 1.5px solid #e4e4e4;
        padding: 0 5px;
        width: calc(100% - 15px);
       
        &:focus-within {
          border-color: #0093e9;
        }
        span {
          font-size: 4.5vw;
          width: 10%;
          display: flex;
          justify-content: center;
        }  
       
        input {
          width: 90%;
          padding-left: 5px;
          margin: 2vw 0;
          width: 100%;
          height: 10vw;
          border: none;
          outline: 0;
        }       
      }     
      
      button {
        padding: 5px;
        width: 80%;
        height: 12vw;
        border-radius: 30px;
        border: none;
        background: #0093e9;
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
    }  
  
</style>