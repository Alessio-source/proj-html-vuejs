var app = new Vue({
  el: "#app",
  data: {
    links: [],
  },
  methods: {
    getLinks: function() {
      // il data viene preso da data.js
      this.links = data.links;
      console.log(this.links);
    }
  },
  created: function() {
    this.getLinks();
  },
})
