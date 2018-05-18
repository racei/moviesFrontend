import Route from '@ember/routing/route';
import $ from 'jquery';
export default Route.extend({
    model(){
        return $.get("http://localhost:59585/api/Movies");
    }
});
