import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
    tagName: 'tr',
    editing: false,
    title: '',
    yearReleased: '',
    length: '',
    "usersWatched": [],
    store: service(),
    actions:{
        deleteMovie(id){
            this.get('store').findRecord('movie', id).then(function(movie){
                movie.deleteRecord();
                movie.save();
            })
        },
        editMovie(){
            this.toggleProperty('editing');

        },
        saveMovie(id){
            let title = this.get('title');
            let yearReleased = this.get('yearReleased');
            let length = this.get('length');
            this.get('store').findRecord('movie', id).then(function(movie){
                movie.set('title', title);
                movie.set('yearReleased', yearReleased);
                movie.set('length', length);
                movie.save();
            })
            this.toggleProperty('editing');
        }


        
    }
});
