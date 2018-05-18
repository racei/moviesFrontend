import Controller from '@ember/controller';

export default Controller.extend({

    title: '',
    yearReleased: '',
    length: '',
    actions:{
        addMovie(){
            let newMovie = this.get('store').createRecord('movie',{title:this.title, yearReleased:this.yearReleased, length:this.length});
            newMovie.save();
        }
    }
});
