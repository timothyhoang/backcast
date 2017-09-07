var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', () => { this.render(); });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.forEach(this.renderVideoListEntry, this);

    return this;
  },

  renderVideoListEntry: function(video) {
    var videoListEntryView = new VideoListEntryView({
      el: this.$('.video-list div'),
      model: video
    }).render();
  },

  template: templateURL('src/templates/videoList.html')

});