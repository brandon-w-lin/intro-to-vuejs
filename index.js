// index.js
/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Fight Club", "The Bourne Identity", "Inception"],
      newMovie: null,
      hasZoolander: null,
    };
  },
  methods: {
    addMovie: function () {
      this.movies.push(this.newMovie);
      this.checkZoolander();
      this.newMovie = null;
    },
    checkZoolander: function () {
      this.hasZoolander = this.movies.includes("Zoolander");
    },
  },
  created: function () {
    this.checkZoolander();
  },
};

Vue.createApp(App).mount("#app");
