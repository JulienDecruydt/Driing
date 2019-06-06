<template>
  <section class="profil">
    <div class="header">
      <img src="../assets/user.svg">
      <h1>{{ getUser.prenom }} {{ getUser.nom }}</h1>
      <span>{{ getUser.grade }}</span>
      <div class="link">
        <div v-on:click="setOpen('params')" :class="focusBloc == 'params' ? 'is--active' : '' ">
          <font-awesome-icon :icon="['fas', 'cog']" />
          Paramètres
        </div>
        <div v-on:click="setOpen('commu')" :class="focusBloc == 'commu' ? 'is--active' : '' ">
          <font-awesome-icon :icon="['fas', 'vector-square']" />
          Communautés
        </div>
        <div v-on:click="setOpen('demandes')" :class="focusBloc == 'demandes' ? 'is--active' : '' ">
          <font-awesome-icon :icon="['fas', 'ticket-alt']" />
          Demandes
        </div>
      </div>
    </div> 
    <div class="under_header">
      <params v-if="focusBloc == 'params' "></params>
      <commu v-if="focusBloc == 'commu' "></commu>
      <tickets v-if="focusBloc == 'demandes' "></tickets>
    </div>
  </section>
</template>


<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import commu from '../components/profil/commu.vue';
  import params from '../components/profil/params.vue';
  import tickets from '../components/profil/tickets.vue';
  
  
  export default {
    name: "profil",
    components: {
      commu,
      params,
      tickets
    },
    data() {
      return {
        focusBloc: "params",
      }
    },
    computed: {
      ...mapGetters([
        "getLog",
      ]),
      ...mapGetters("user", [
        "getUser",
      ]),    
    },
    methods: {
      setOpen: function(vals) {
        this.focusBloc = vals;
      }
    },
    mounted: function() {
      if(this.getLog == false) {
        this.$router.push({ path: 'login' })
      }
    }
  };

</script>



<style scoped>
  .profil {
    
  }
  
  /* ======= HEADER ====== */
  
  .profil .header {
    padding: 10px;
  }
  
  .profil .header img {
    height: 15vw;
  }
  
  .profil .header h1 {
    margin: 5px;
    font-size: 5vw;
  }
  
  .profil .header span {
    font-size: 4vw;
  }
  
  /* ======= LINK IN HEADER ====== */
  
  .profil .header .link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px 0;
  }
  
  .profil .header .link div {
    margin: 0 5px;
    font-size: 4vw;
  }
  
  .profil .header .link div.is--active {
    color: #0093e9;
  }
  
  .profil .header .link svg {
    font-size: 8vw;
    margin-bottom: 5px;
  }
</style>