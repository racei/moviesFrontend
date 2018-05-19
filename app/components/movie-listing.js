import Component from '@ember/component';

export default Component.extend({
    tagName: 'tr',
    editing: false,
    store: Ember.inject.service(),
    actions:{
        deleteMovie(id){
            this.get('store').findRecord('movie', id).then(function(movie){
                movie.deleteRecord();
                movie.save();
            })
        },
        editMovie(id){
            this.toggleProperty('editing');

        }
    }
});
