<template>
  <div class="homepage">
    <div class="header">
      <h3>Bonjour {{ getUser.prenom }}</h3>
    </div>
    <span class="subtitle">Mes communautés les plus actives</span>
    <commu_list></commu_list>
    <span class="subtitle">Des demandes dans mes communautés</span>
    <div class="tickets_list">
      <div class="ticket" v-for="t in tickets" >
        <h1>{{ t.title }}</h1>
        <p>{{ t.description }}</p>
        <div class="type" v-if="t.type == 'echange'">
           Offre <span>{{ t.offre }}</span> contre <span>{{ t.demande }}</span>
        </div>
        <div class="type" v-if="t.type == 'demande'">
           Demande : <span>{{ t.demande }}</span>
        </div>
      </div>   
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import StaticHome from '../components/homepage/StaticHome.vue';
  import commu_list from '../components/homepage/commu_list.vue';
  
  export default {
    name: "homepage",
    components: {
      StaticHome,
      commu_list,
    },
    data() {
      return {
        tickets: [],
      }
    },
    computed: {
      ...mapGetters([
        "getLog",
      ]), 
      ...mapGetters("user", [
        "getUser",
      ]),
      ...mapGetters("commu", [
        "getCommu",
      ]),      
    },
    methods: {
      ...mapActions("commu", [
        "loadCommuUser",
      ]),            
    },
    watch: {
      getCommu: function() {
        for(var i = 0; i < this.getCommu.length; i++) {
          for(var x = 0; x < this.getCommu[i].tickets.length; x++) {
            this.tickets.push(this.getCommu[i].tickets[x]);
          }
        }
        
      }
    },
    mounted: function() {
      if(this.getLog == false) {
        this.$router.push({ path: 'login' })
      } else {
        this.loadCommuUser();
      }
    }
  };

</script>


<style lang="scss" scoped>
  .homepage {
    padding: 0 10px;
    .header {
      text-align: left;
    }
    
    .subtitle {
      display: block;
      text-align: left;
      font-size: 14px;
      margin: 10px 0;
    }
    
    .tickets_list {
      .ticket {
        margin: 0 auto 15px auto;
        background: white;
        width: 80%;
        padding: 5px 10px;
        border-radius: 5px;
        
        h1 {
          font-size: 15px;
          margin: 0;
          text-align: left;
        }
        
        p {
          text-align: left;
          margin: 0;
        }
        
        .type {
          margin-top: 20px;
          span {
            font-weight: bold;
          }          
        }
      }
    }
  }

</style>