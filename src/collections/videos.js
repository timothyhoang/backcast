var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(string) {
    string = string || 'react js';
    var collection = this;

    Backbone.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: 'AIzaSyCOPtbOeawqgTJ0s9Uj90tP9J7WBo7lhk4',
        maxResults: 5,
        q: string,
        type: 'video',
        part: 'snippet',
        chart: 'mostPopular',
        videoEmbeddable: true
      },
      success: function(data) {
        console.log('backcast: Data retrieved');
        collection.fetch({
          url: this.url,
          parse: collection.parse
        });
      },
      error: (data) => {
        console.error('backcast: Failed to retrieve data', data);
      }
    });
  },

  parse: function(data) {
    return data.items;
  }

});
