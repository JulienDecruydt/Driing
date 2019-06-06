<template>
  <div class="top_nav" v-if="getLog">
    <div class="header">
      <div class="logo">
        <router-link to="/homepage">
          <img src="../../assets/driing_logo_blanc.svg">
        </router-link>
      </div>
      <div class="search" v-on:click="changeOpenSearch()">
        <font-awesome-icon v-if="!openSearch" :icon="['fas', 'search']" />
        <font-awesome-icon v-if="openSearch" :icon="['fas', 'times']" />
      </div>
    </div>
    <StaticHome :class="openSearch ? 'is--active' : '' "></StaticHome>
  </div>
</template>


<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import StaticHome from '../homepage/StaticHome.vue';
  
  export default {
    name: "header",
    components: {
      StaticHome,
    },
    data() {
      return {
        openSearch: false,
      }
    },
    computed: {
      ...mapGetters([
        "getLog",
      ]),
    },
    methods: {
      changeOpenSearch: function() {
        this.openSearch = !this.openSearch;
      }        
    },
  };

</script>


<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 60px;
    background: #0093e9;
    display: flex;
    align-items: center;
    
    .logo {
      width: calc(90% - 40px);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 20px;
      
      a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      } 
      
      img {
        max-height: 40px;
      }      
    }
    
    .search {
      width: 20%;
      padding-right: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      
      svg {
        color: white;
      }
    }
  }
</style>