import Ember from 'ember';

export default Ember.Component.extend({
    newEvent:"",
    eventTitle:"",

    _initializeCalendar: function(){

            var date = new Date(),
                d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear(),
                self = this,
                calendar = $('#calendar');
        return calendar.fullCalendar({
            header:{
                left: 'prev,today,next,title',
                center: 'month, agendaWeek,agendaDay,year'
            },
            defaultview: 'month',
            numberOfMonths: 2,
            selectable: true,
            slotDuration: '00:05:0',
            selectHelper: true,
            /*eventRender: function(event, element) {
                            element.attr('title', event.title);
                                    },*/
            select: self.get('addEvent'),
            editable: true
        });
    }.on('didInsertElement'),

    actions: {
        addEvent: function(){
            console.log('serhglr');
        }
    }
});
