<template>
  <div class="tickets">
    <div class="header">
      <h1>Demandes</h1>
      <span>
        <font-awesome-icon :icon="['fas', 'plus-circle']" v-on:click="setOpen()"/>
      </span>
    </div>
    <section class="tickets_list">
      <div class="ticket" v-for="c in getCommu" :style="{ backgroundImage: 'url(' + c.image_couverture + ')' }" v-on:click="setOpenAddTicket()">
        <div>
          {{ c.title }}
          <br>
          <span><font-awesome-icon :icon="['fas', 'user']" /> {{ c.users.length }}</span>
          <br>
          <span><font-awesome-icon :icon="['fas', 'ticket-alt']" /> {{ c.tickets.length }}</span>
        </div>
      </div>
    </section>
    <create_ticket></create_ticket>
  </div>
</template>


<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import ticketsView from '../ticketsView.vue';
  import create_ticket from '../create_ticket.vue';
  
  
  export default {
    name: "commu",
    components: {
      ticketsView,
      create_ticket,
    },
    data() {
      return {
        addTicket: false,
        
        title: "",
        description: "",
        code_postal: "",
        tag: "",
        tags: [],
        users: [],
        tickets: [],
      }
    },
    computed: {
      ...mapGetters("commu", [
        "getCommu",
      ]), 
      ...mapGetters("user", [
        "getUser",
      ]),   
      ...mapGetters("tickets", [
        "getAddTicketOpen",
      ]),   
    },
    methods: {
      ...mapActions("commu", [
        "addCommuAction",
        "loadCommuUser",
      ]), 
      ...mapMutations("tickets", [
        "setAddTicketOpen"
      ]), 
      ...mapMutations("commu", [
        "setSelectCommu"
      ]),    
      setOpen: function(vals) {
        this.addTicket = !this.addTicket;
        this.setAddTicketOpen(this.addTicket);
      },
    },
  };

</script>


<style scoped>
  .tickets {
  }
  
  /* ======= HEADER ====== */
  
  .tickets .header {
    display: flex;
    justify-content: center;
    align-items: center
  }
  
  .tickets .header h1 {
    font-size: 5vw;
    width: 80%;
  }
  
  .tickets .header svg {
    font-size: 8vw;
    color: #ff2c63;
  }
  
  /* ======= List TICKET ====== */
  
  .tickets .tickets_list {
    margin-top: 20px;
    width: 85%;
    margin: 0 auto;
  }
  
  
  /* ======= TICKET IN List TICKET ====== */
  
  .tickets .tickets_list .ticket {
    position: relative;
    width: 100%;
    height: 30vw;
    margin: 10px 0;
    background-size: cover;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
  
  .tickets .tickets_list .ticket:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.40);
    border-radius: 10px;
    -webkit-box-shadow: 0 0 20px #b9b2b2;
    box-shadow: 0 0 20px #dcdcdc;    
  }
  
  .tickets .tickets_list .ticket div {
    position: relative;
    z-index: 2;
    color: white;
    font-weight: bold;
  }
  
  
  /* ======= add TICKET ====== */
  
  .tickets .add_ticket {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-x: scroll;
    transition: all .5s ease-in-out;
    background: white;
    z-index: 3;
    -webkit-box-shadow: 0 0 20px gainsboro;
    box-shadow: 0 0 20px gainsboro;
    transform: translateX(-105vw);
  }
  
  .tickets .add_ticket.is--active {
    transform: translate(0vw);
  }
  
  .tickets .add_ticket .in {
    width: 100vw;
    height: 100vh;
  }
  
  .tickets .add_ticket .close {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    bottom: 0vh;
    width: 50%;
    height: 10vw;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-shadow: 0 0 20px #b9b2b2;
    box-shadow: 0 0 20px #dcdcdc;
    color: white;
    background: #ff2c63;
  }
  
  .tickets .add_ticket .close svg {
    margin-right: 10px;
    margin-top: -5px;
  }
  
  .tickets .add_ticket h5 {
    font-size: 5vw;
    margin: 20px;
  }
  
  
  
  /* ============== FORMULAIRE ================ */
  
  .tickets .formulaire {
    width: 90%;
    height: 100%;
    margin: 10px auto;
  }
  
  .tickets .formulaire label {
    display: flex;
    align-items: center;
    height: 14vw;
    background: white;
    border-radius: 5px;
    margin-top: 4vw;
    border: 2px solid rgb(242, 242, 242);
  }

  .tickets .formulaire label span {
    width: 15%;
    display: flex;
    justify-content: center;
  }

  .tickets .formulaire label input {
    width: 85%;
    background: transparent;
    font-weight: bold;
    border: none;
    outline: 0;
  }
  
  .tickets .formulaire textarea {
    display: flex;
    align-items: center;
    height: 30vw;
    background: white;
    border-radius: 5px;
    margin-top: 4vw;
    border: 2px solid rgb(242, 242, 242);
    resize: none;
    width: calc(100% - 25px);
    padding: 10px;
    font-weight: bold;
    outline: 0;
  }
  
  
  .tickets .formulaire .add_tag {
    width: 99%;
    height: 35px;
    background: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    margin: 5px 0;
    border: 2px solid #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .tickets .formulaire .tags_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 10px;
  }
  
  .tickets .formulaire .submit {
    background-image: linear-gradient(90deg, #0093e9 0%, #80d0c7 100%);
    width: 100%;
    height: 20vw;
    padding: 5px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 5vw;
    border: none;
  }
</style>