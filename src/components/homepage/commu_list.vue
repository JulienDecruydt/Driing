<template>
  <div class="next_commu">
    <div class="grid_commu">
      <div class="commu" v-for="c in getCommu" :style="{ backgroundImage: 'url(' + c.image_couverture + ')' }" v-on:click="setCommuSelect(c)">
        <div>
          {{ c.title }}
          <br>
          <span><font-awesome-icon :icon="['fas', 'user']" /> {{ c.users.length }}</span>
          <br>
          <span><font-awesome-icon :icon="['fas', 'ticket-alt']" /> {{ c.tickets.length }}</span>
        </div>
      </div>    
    </div>
    <commuView></commuView>
  </div>
</template>


  
<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import commuView from '../commuView.vue';
  
  export default {
    name: "homepage",
    components: {
      commuView,
    },
    data() {
      return {
        
      }
    },
    computed: {
      ...mapGetters("commu", [
        "getCommu",
      ]),      
    },
    methods: {
       ...mapMutations("commu", [
        "setSelectCommu",
      ]),  
      setCommuSelect: function(commu) {
        this.setSelectCommu(commu);
      }
    }
  };

</script>




<style>
  .next_commu {
    position: relative;
    margin-top: 5vw;
  }

  .next_commu .grid_commu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin: 10vw 15px;
  }
  
  .next_commu .grid_commu .commu {
    height: 30vw;
    background-size: cover;
    border-radius: 10px;
    font-size: 5vw;
    box-shadow: 0 0 20px darkgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: left;
  }
  
  .next_commu .grid_commu .commu:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.40);
  }
  
  .next_commu .grid_commu .commu div {
    position: relative;
    z-index: 2;
    color: white;
  }
</style>