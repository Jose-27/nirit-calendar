import Ember from 'ember';

export default Ember.Route.extend({
    model:function(){
        return{
            events: Ember.A([
                  {title: this.eventTitle, start: Date.now()},
            ])
        };
    }
});
