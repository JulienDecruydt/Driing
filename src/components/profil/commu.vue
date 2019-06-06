<template>
  <div class="communaute">
    <div class="header">
      <h1>Mes communautés</h1>
      <span v-on:click="setOpen()">
        <font-awesome-icon :icon="['fas', 'plus-circle']" />
      </span>
    </div>
    <section class="commu_list" v-if="getCommu.length > 0">
      <div class="commu" v-for="c in getCommu" :style="{ backgroundImage: 'url(' + c.image_couverture + ')' }" v-on:click="setCommuSelect(c)">
        <div>
          {{ c.title }}
          <br>
          <span><font-awesome-icon :icon="['fas', 'user']" /> {{ c.users.length }}</span>
          <br>
          <span><font-awesome-icon :icon="['fas', 'ticket-alt']" /> {{ c.tickets.length }}</span>
        </div>
      </div>
    </section>
    <div v-else>
      <span>Vous n'avez pas de communauté</span>
    </div>
    <commuView></commuView>
    <div class="add_commu" :class="addCommu ? 'is--active' : ''">
      <div class="close" v-on:click="setOpen()">
        <font-awesome-icon :icon="['fas', 'angle-left']" /> Annuler
      </div> 
      <div class="in">
        <h5>Je créer ma communauté</h5>
        <form class="formulaire" @submit.prevent="addCommuFunction">
          <label>
            <span><font-awesome-icon :icon="['fas', 'pen']" /></span>
            <input type="text" placeholder="Nom de la communauté" v-model="title">
          </label> 
          <textarea type="text" placeholder="Description de la communauté" v-model="description">
          </textarea>
          <label>
            <span><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>
            <input type="text" placeholder="Code postal" v-model="code_postal">
          </label> 
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
          <button class="submit" type="submit">
            Je créer ma communauté !
          </button>
        </form>     
      </div>
    </div>
  </div>
</template>


<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import commuView from '../commuView.vue';
  
  
  export default {
    name: "commu",
    components: {
      commuView,
    },
    data() {
      return {
        addCommu: false,
        
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
    },
    methods: {
      ...mapActions("commu", [
        "addCommuAction",
        "loadCommuUser",
      ]), 
      ...mapMutations("commu", [
        "setSelectCommu"
      ]),    
      setOpen: function(vals) {
        this.addCommu = !this.addCommu;
      },
      setCommuSelect: function(commu) {
        this.setSelectCommu(commu);
      },
      addTag: function() {
        this.tags.push(this.tag);
        this.tag = "";
      },
      deleteTag: function(index) {
        this.tags.splice(index, 1);
      },
      addCommuFunction: function() {
        var commu = {
          id_admin: this.getUser._id,
          commu: {
              title: this.title,
              description: this.description,
              image_couverture: "https://images.unsplash.com/43/2EsHHwmRswlLYnaG07Ew_paris-motionbug.com.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
              image_groupe: "",
              location: "",
              code_postal_commu: this.code_postal,
              ville: "",
              users: this.getUser,
              tickets: this.tickets,
              tags: this.tags
          }
        };
        this.addCommuAction(commu);
        this.title = "";
        this.description = "";
        this.code_postal = "";
        this.tag = "";
        this.tags = [];
        this.users = [];
        this.addCommu = false;
        var _this = this;
        setTimeout(function() {
          _this.loadCommuUser();
        }, 500);
      }
    },
    mounted: function() {
      this.loadCommuUser();
    }
  };

</script>




<style scoped>
  .communaute {
  }
  
  /* ======= HEADER ====== */
  
  .communaute .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .communaute .header h1 {
    font-size: 5vw;
    width: 80%;
  }
  
  .communaute .header svg {
    font-size: 8vw;
    color: #ff2c63;
  }
  
  /* ======= List COMMU ====== */
  
  .communaute .commu_list {
    margin-top: 20px;
    width: 85%;
    margin: 0 auto;
  }
  
  
  /* ======= COMMU IN List COMMU ====== */
  
  .communaute .commu_list .commu {
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
  
  .communaute .commu_list .commu:after {
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
  
  .communaute .commu_list .commu div {
    position: relative;
    z-index: 2;
    color: white;
    font-weight: bold;
  }
  
  
  /* ======= add COMMU ====== */
  
  .communaute .add_commu {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 60px);
    overflow-y: scroll;
    transition: all .5s ease-in-out;
    background: white;
    z-index: 100;
    transform: translateX(-105vw);
  }
  
  .communaute .add_commu.is--active {
    transform: translateX(0vw);
  }
  
  .communaute .add_commu .in {
    width: 100vw;
  }
  
  .communaute .add_commu .close {
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
    margin: 0 0 10px 0;
    color: white;
    background: #ff2c63;
  }
  
  .communaute .add_commu .close svg {
    margin-right: 10px;
    margin-top: -5px;
  }
  
  .communaute .add_commu h5 {
    font-size: 5vw;
    margin: 20px;
    text-align: left;
  }
  
  
  
  /* ============== FORMULAIRE ================ */
  .communaute .formulaire {
    width: 90%;
    height: 100%;
    margin: 10px auto;
  }
  
  .communaute .formulaire label {
    display: flex;
    align-items: center;
    height: 14vw;
    background: white;
    border-radius: 5px;
    margin-top: 4vw;
    border: 2px solid rgb(242, 242, 242);
  }

  .communaute .formulaire label span {
    width: 15%;
    display: flex;
    justify-content: center;
  }

  .communaute .formulaire label input {
    width: 85%;
    background: transparent;
    font-weight: bold;
    border: none;
    outline: 0;
  }
  
  .communaute .formulaire textarea {
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
  
  
  .communaute .formulaire .add_tag {
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
  
  .communaute .formulaire .tags_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 10px;
  }
  
  .communaute .formulaire .submit {
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