import Ember from 'ember';

export default Ember.Component.extend({

    _initializeCalendar: function(){

            var date = new Date(),
                d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear(),
                calendar = $('#aside-calendar');
        return calendar.fullCalendar({
            header:{
                left: 'title',
            },
            events: this.theEvents,
            defaultview: 'month',
            selectable: true,
        });
    }.on('didInsertElement'),

});
