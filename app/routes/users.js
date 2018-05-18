import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return $.get('http://localhost:59585/api/Users')
    }
});
