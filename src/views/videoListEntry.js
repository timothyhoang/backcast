var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleTitleClick'
  },

  handleTitleClick: function() {
    this.model.select();
  },

  render: function() {
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
