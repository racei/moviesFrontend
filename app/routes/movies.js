import Route from '@ember/routing/route';
import $ from 'jquery';
export default Route.extend({
    model(){
        return $.get("http://localhost:59585/api/Movies");
        //return [{id: 1, title:"jurassic park"}] ;
    },actions:{error: function(error, transition) {
        // handle the error
        console.log(error.statusText);
        return true;
      }}
});
