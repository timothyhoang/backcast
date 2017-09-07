var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();

    this.videos.search();

    this.render();

    this.videos.on('select', (video) => { 
      new VideoPlayerView({model: video}); 
    });

    this.$('button').on('click', () => {
      this.videos.search(this.$('input').val());
      this.$('input').val('');
    });

    this.$('input').on('keyup', (event) => {
      if(event.keyCode === 13){
        this.videos.search(this.$('input').val());
        this.$('input').val('');
      }
    });
  },

  render: function() {
    this.$el.html(this.template());

    new SearchView({
      el: this.$('.search')
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