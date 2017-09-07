var SearchView = Backbone.View.extend({

  events: {
    'click button': 'handleSearchClick',
    'keyup input': 'handleSearchReturn',
    'keypress button': 'handleSearchReturn'
  },

  handleSearchClick: function() {
    this.collection.search(this.$('input').val());
    this.$('input').val('');
  },

  handleSearchReturn: function(event) {
    if(event.keyCode === 13){
      this.collection.search(this.$('input').val());
      this.$('input').val('');
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
