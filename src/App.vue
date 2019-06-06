<template>
  <div id="app">
    <Nav></Nav>
    <Header_comp></Header_comp>
    <router-view></router-view>
  </div>
</template>



<script>
  import Nav from './components/Nav.vue';
  import Header_comp from './components/static/header_static.vue';
  
  export default {
    name: "app",
    components: {
      Header_comp,
      Nav,
    },
  };

</script>



<style>
  body {
    padding: 0;
    margin: 0;
    background: #f7F7F7;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    cursor: pointer;
    -webkit-box-shadow: 0 3px 10px #b3b3b3;
    box-shadow: 0 3px 10px #b3b3b3;
  }

  input[type="color"],
  input[type="date"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="text"],
  input[type="time"],
  input[type="url"],
  input[type="week"],
  select:focus,
  textarea {
    font-size: 16px;
  }

  /* =========================== FONT ============================= */

  @font-face {
    font-family: "nexaRegular";
    src: url("./assets/Nexa Regular.otf");
  }

  #app {
    font-family: nexaRegular, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  textarea {
    font-family: nexaRegular, sans-serif;
  }
  
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

</style>
