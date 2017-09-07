var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', () => { 
      this.render();
      this.collection.first().select();
    });
  },

  render: function() {
    this.$el.children().detach();
    // this.$el.html(this.template());

    this.collection.forEach(this.renderVideoListEntry, this);

    return this;
  },

  renderVideoListEntry: function(video) {
    var videoListEntryView = new VideoListEntryView({
      model: video
    });

    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});