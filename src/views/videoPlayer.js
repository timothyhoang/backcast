var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.render();
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else if (this.collection) {
      this.$el.html(this.template(this.collection.first().attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
