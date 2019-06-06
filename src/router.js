import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      name: "error",
      component: () =>
        import("./views/Error.vue")
    }, 
    {
      path: "/login",
      name: "login",
      component: () =>
        import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import("./views/Signin.vue")
    },
    {
      path: "/",
      name: "landing",
      component: () =>
        import("./views/Landing.vue")
    },
    {
      path: "/homepage",
      name: "homepage",
      component: () =>
        import("./views/Homepage.vue")
    }, 
    {
      path: "/profil",
      name: "profil",
      component: () =>
        import("./views/Profil.vue")
    },
  ]
});
