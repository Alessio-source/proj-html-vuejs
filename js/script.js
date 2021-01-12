var app = new Vue({
  el: "#app",
  data: {
    links: [],
    cards: []
  },
  methods: {
    getData: function() {
      // il data viene preso da data.js
      this.links = data.links;
      this.cards = data.cards;
    }
  },
  created: function() {
    this.getData();
  },
})
