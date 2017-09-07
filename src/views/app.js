var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();

    this.videos.search();

    this.render();

    this.videos.on('select', (video) => { 
      new VideoPlayerView({model: video}); 
    });
  },

  render: function() {
    this.$el.html(this.template());

    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();

    new VideoPlayerView({model: this.videos.first()});

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});