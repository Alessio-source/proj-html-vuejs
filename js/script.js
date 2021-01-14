var app = new Vue({
  el: "#app",
  data: {
    links: [],
    cards: [],
    classes: [],
    news: []
  },
  methods: {
    getData: function() {
      // il data viene preso da data.js
      this.links = data.links;
      this.cards = data.cards;
      this.classes = data.classes;
      this.news = data.news;
    }
  },
  created: function() {
    this.getData();
  },
})
