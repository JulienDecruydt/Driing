<template>
  <div class="commu_view" :class="getSelectCommu != '' ? 'is--active' : '' " v-hammer:swipe.left="close">
    <div class="close" v-on:click="close()">
      <font-awesome-icon :icon="['fas', 'times']" />
    </div>
    <div v-if="getSelectCommu != '' ">
      <div class="header" :style="{ backgroundImage: 'url(' + getSelectCommu.image_couverture + ')' }">
        <div class="in">
          <h2>{{ getSelectCommu.title }}</h2>
          <span><font-awesome-icon :icon="['fas', 'user']" /> {{ getSelectCommu.users.length }}</span>
          <br>
          <span><font-awesome-icon :icon="['fas', 'ticket-alt']" /> {{ getSelectCommu.tickets.length }}</span>
        </div>
        <div class="edit" v-if="getSelectCommu.id_admin == getUser._id">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </div>
      </div>
      <div class="filter">
        <div v-on:click="changeFocus('Demandes')" :class="selectDiv == 'Demandes' ? 'is--active' : '' ">
          <span>Demandes</span>
        </div>
        <div v-on:click="changeFocus('Chat')" :class="selectDiv == 'Chat' ? 'is--active' : '' ">
          <span>Chat</span>
        </div>
        <div v-on:click="changeFocus('Membres')" :class="selectDiv == 'Membres' ? 'is--active' : '' ">
          <span>Membres </span>
        </div>
      </div>
      <div class="tickets" v-if="selectDiv == 'Demandes' ">
        <button v-on:click="openAddTicket()">Faire une demande</button>
        <div class="list_ticket" v-if="getSelectCommu.tickets.length != 0">
          <div class="ticket" v-for="t in getSelectCommu.tickets" >
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
        <div v-if="getSelectCommu.tickets.length == 0">
          <span>Il n'y pas de demande dans cette communauté</span>
        </div>
      </div>
      <div class="membres" v-if="selectDiv == 'Membres' ">
        <div class="user" v-for="u in getSelectCommu.users">
          <div class="left">
            <div class="avatar">
              <img src="../assets/user.svg">
            </div> 
            <div>
              <h4>{{ u.prenom }} {{ u.nom }}</h4>
              <span>{{ u.grade }}</span>
            </div>
          </div>
          <div class="right" v-if="getSelectCommu.id_admin == getUser._id">
            <span class="expulse" v-if="u._id != getSelectCommu.id_admin">Exclure</span>
            <span class="admin" v-if="u._id == getSelectCommu.id_admin">Admin</span>
          </div>
        </div>        
      </div>
    </div>
    <create_ticket></create_ticket>
  </div>
</template>





<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import ticketsView from './ticketsView.vue';
  import create_ticket from './create_ticket.vue';
  
  export default {
    name: "commuView",
    components: {
      ticketsView,
      create_ticket,
    },
    data() {
      return {
        selectDiv: "Demandes",
      }
    },
    computed: {
      ...mapGetters("commu", [
        "getSelectCommu",
      ]),
      ...mapGetters("user", [
        "getUser",
      ]),      
    },
    methods: { 
      ...mapMutations("commu", [
        "setSelectCommu",
      ]),
      ...mapMutations("tickets", [
        "setAddTicketOpen",
      ]),
      close: function() {
        this.setSelectCommu("");
      },
      openAddTicket: function() {
        this.setAddTicketOpen(true);
      },
      changeFocus: function(state) {
        this.selectDiv = state;
      }
    },
  };

</script>


<style lang="scss" scoped>
  .commu_view {
    position: fixed;
    top: 60px;
    left: 0;
    background: white;
    width: 100vw;
    height: calc(100vh - 60px);
    z-index: 100;
    transition: all .5s ease-in-out;
    transform: translateX(-120vw);
    padding-bottom: 20px;
    overflow-y: scroll;
    
    &.is--active {
      transform: translateX(0vw);
    }
    
    .close {
      position: fixed;
      top: 0;
      right: 0;
      padding: 10px;
      background: #ff2c63;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4vw;
      z-index: 3; 
    }  
    
    
    .header {
      height: 45vw;
      background-size: cover;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.30);
      }
      
      .in {
        position: relative;
        z-index: 2;
        color: white;
        text-align: left;
        
        h2 {
          margin: 0;
        }        
      }  
      
      .edit {
        position: absolute;
        bottom: -20px;
        left: 10px;
        border-radius: 50%;
        background: #ff2c63;
        color: white;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        font-size: 5vw;
      }      
    } 
    
    .filter {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;

      div {
        margin: 0 2vw;
        border: 2px solid #f5f5f5;
        padding: 5px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        font-size: 5vw;

        &.is--active {
          background: #0093e9;
          color: white;
          border-color: #0093e9;
        }
      }
    }    
    
    
    .tickets {
      margin-top: 30px;
      width: 100%;
      
      button {
        margin: -30px 0 20px 0;
        background: #0093e9;
        color: white;
        width: 80%;
        padding: 8px;
        font-size: 16px;
        box-shadow: none;
      }
      
      .ticket {
        margin: 0 auto 15px auto;
        background: #f7f7f7;
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
    
    .membres {
      margin-top: 30px;
      width: 100%;
      
      .user {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 2px solid #fbfbfb;
        
        .left {
          display: flex;
          align-items: center;
          text-align: left;
          width: 80%;
          
          .avatar {
            margin: 0 15px 0 0;
            
            img {
              height: 10vw;
            }
          }
          
          h4 {
            margin: 0;
          }
        }
        
        .right {
          text-align: center;
          width: 20%;
          .expulse {
            color: red;
          }
          
          .admin {
            color: #0093e9;
          }
        }
      }
    }    
  } 
  
  
</style>
