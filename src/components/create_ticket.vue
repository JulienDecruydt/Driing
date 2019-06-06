<template>
  <div class="add_ticket" v-hammer:swipe.left="close" :class="getAddTicketOpen ? 'is--active' : ''">
    <div class="close" v-on:click="close()">
      <font-awesome-icon :icon="['fas', 'angle-left']" /> Annuler
    </div>
    <div class="in">
      <h5>Je créer ma demande</h5>
        <form class="formulaire" @submit.prevent="addTicketFunction">
          <div class="choix_commu" v-if="!commu_select">
            <span>Je choisi ma commu</span>
            <div class="commu_list">
              <div class="commu" v-for="c in getCommu" v-on:click="setCommu(c)" :class="c === selected_commu ? 'is--active' : '' ">
                {{ c.title }}
              </div>
              <div class="commu_btn" v-on:click="confirmCommu()">Je valide la communauté</div>
            </div>
          </div>
          <div class="form_in" v-else>
            <label>
              <span><font-awesome-icon :icon="['fas', 'pen']" /></span>
              <input type="text" placeholder="Titre de la demande" v-model="title">
            </label> 
            <textarea type="text" placeholder="Description de la demande" v-model="description">
            </textarea>
            <div class="choix_type">
              <div v-on:click="setType('echange')" :class="'echange' === type ? 'is--active' : '' ">Échange</div>
              <div v-on:click="setType('offre')" :class="'offre' === type ? 'is--active' : '' ">Offre</div>
              <div v-on:click="setType('demande')" :class="'demande' === type ? 'is--active' : '' ">Demande</div>
            </div>

            <div v-if="type === 'echange'">
              <span class="subtitle">J'offre</span>
              <label>
                <span><font-awesome-icon :icon="['fas', 'pen']" /></span>
                <input type="text" v-model="offre" placeholder="Exemple : aide au jardin">
              </label>  

              <span class="subtitle">Et je veux en échange</span>
              <label>
                <span><font-awesome-icon :icon="['fas', 'pen']" /></span>
                <input type="text" v-model="demande" placeholder="Exemple : Garde d'enfant">
              </label>          
            </div> 
            
            <div v-if="type === 'demande'">
              <span class="subtitle">Je cherche</span>
              <label>
                <span><font-awesome-icon :icon="['fas', 'pen']" /></span>
                <input type="text" v-model="demande" placeholder="Exemple : Une aide a domicile">
              </label>            
            </div>      
            
            <div v-if="type === 'offre'">
              <span class="subtitle">J'offre</span>
              <label>
                <span><font-awesome-icon :icon="['fas', 'pen']" /></span>
                <input type="text" v-model="offre" placeholder="Exemple : Une aide a domicile">
              </label>            
            </div>
            
            <label>
              <span><font-awesome-icon :icon="['fas', 'tags']" /></span>
              <input type="text" placeholder="Ajouter tag (exemple : Jardiniers, outils ...)" v-model="tag">
            </label> 
            <div class="add_tag" v-on:click="addTag()">Ajouter le tag</div>
            <div class="tags_grid">
              <div class="tag" v-for="(t, i) in tags">
                {{ t }}
                <span v-on:click="deleteTag(i)">
                  <font-awesome-icon :icon="['fas', 'times']" />
                </span>
              </div>
            </div>
          </div>
          <button v-if="commu_select" class="submit" type="submit">
            Je créer ma demande !
          </button>
        </form>  
    </div>
  </div>
</template>




<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  
  export default {
    name: "commu",
    data() {
      return {
        title: "",
        description: "",
        tag: "",
        tags: [],
        users: [],
        tickets: [],
        type: "echange",
        offre: "",
        demande: "",
        
        selected_commu: "",
        commu_select: false,
      }
    },
    computed: {  
      ...mapGetters("user", [
        "getUser",
      ]), 
      ...mapGetters("commu", [
        "getCommu",
      ]), 
      ...mapGetters("tickets", [
        "getAddTicketOpen",
      ]),   
    },
    methods: {
      ...mapMutations("tickets", [
        "setAddTicketOpen"
      ]),    
      ...mapActions("tickets", [
        "addTicketAction"
      ]), 
      ...mapActions("commu", [
        "loadCommuUser",
      ]), 
      close: function(vals) {
        this.setAddTicketOpen(false);
        this.commu_select = false,
        this.selected_commu = false; 
      },
      confirmCommu: function() {
        if(this.selected_commu != "") {
          this.commu_select = !this.commu_select; 
        }
      },
      addTag: function() {
        this.tags.push(this.tag);
        this.tag = "";
      },
      deleteTag: function(index) {
        this.tags.splice(index, 1);
      },
      setCommu: function(commu) {
        this.selected_commu = commu;
      },
      setType: function(state) {
        this.offre = "";
        this.demande = "";
        this.type = state;
      },
      addTicketFunction: function() {
        var send = {
          commu_id: this.selected_commu._id,
          ticket: {
            user_admin: this.getUser,
            user_other: "",
            title: this.title,
            description: this.description,
            date: new Date(),
            date_end: "",
            date_accept: "",
            type: this.type,
            offre: this.offre,
            demande: this.demande,
            driing: 280,
            tags: this.tags
          }
        };
        this.addTicketAction(send);
        this.title = "";
        this.description = "";
        this.tag = "";
        this.tags = [];
        this.users = [];
        this.tickets = [];
        this.type = "echange";
        this.offre = "";
        this.demande = "";
        
        this.selected_commu = "";
        this.commu_select = false;
        this.setAddTicketOpen(false);
        var _this = this;
        setTimeout(function() {
          _this.loadCommuUser();
        }, 500);
      }
    },
  };

</script>




<style lang="scss" scoped>
  /* ======= add TICKET ====== */
  
  .add_ticket {
    position: absolute;
    top: 0;
    width: 100vw;
    height: calc(100% - 60px);
    overflow-x: scroll;
    transition: all .5s ease-in-out;
    background: white;
    z-index: 3;
    padding-bottom: 50px;
    transform: translateX(-105vw);
  }
  
  .add_ticket.is--active {
    transform: translate(0vw);
  }
  
  .add_ticket .in {
    width: 100vw;
    height: 100vh;
  }
  
  .add_ticket .close {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 10vw;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: white;
    background: #ff2c63;
  }
  
  .add_ticket .close svg {
    margin-right: 10px;
    margin-top: -5px;
  }
  
  .add_ticket h5 {
    font-size: 5vw;
    margin: 20px;
    text-align: left;
  }
  
  
  .commu {
    margin: 10px 0;
    padding: 10px;
    background: #f7f7f7;
    &.is--active {
      color: #0093e9;
      border: 2px solid #0093e9;
    }
  }
  
  .choix_type {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    
    div {
      margin: 0 10px; 
      padding: 8px;
      border: 2px solid #ededed;
      &.is--active {
        color: #0093e9;
        border: 2px solid #0093e9;
      }
    }
  }
  
  .form_in {
    text-align: left;
    
    .subtitle {
      display: block;
      margin-top: 20px;
    }
  }
  
  .commu_btn {
    background-image: linear-gradient(90deg, #0093e9 0%, #80d0c7 100%);
    width: 100%;
    height: 10vw;
    padding: 5px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 5vw;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  /* ============== FORMULAIRE ================ */
  
  .formulaire {
    width: 90%;
    height: 100%;
    margin: 10px auto;
  }
  
  .formulaire label {
    display: flex;
    align-items: center;
    height: 14vw;
    background: white;
    border-radius: 5px;
    margin-top: 4vw;
    border: 2px solid rgb(242, 242, 242);
  }

  .formulaire label span {
    width: 15%;
    display: flex;
    justify-content: center;
  }

  .formulaire label input {
    width: 85%;
    background: transparent;
    font-weight: bold;
    border: none;
    outline: 0;
  }
  
  .formulaire textarea {
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
  
  
  .formulaire .add_tag {
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
  
  .formulaire .tags_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 10px;
  }
  
  .formulaire .submit {
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
