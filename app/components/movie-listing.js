import Component from '@ember/component';

export default Component.extend({
    tagName: 'tr',
    store: Ember.inject.service(),
    actions:{
        deleteMovie(id){
            this.get('store').findRecord('movie', id).then(function(movie){
                movie.deleteRecord();
                movie.save();
            })
        }
    }
});
