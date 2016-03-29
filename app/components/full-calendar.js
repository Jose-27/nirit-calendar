import Ember from 'ember';

export default Ember.Component.extend({

    _initializeCalendar: function(){

            var date = new Date(),
                d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear(),
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
            select: function(start, end, allDay){
                var title = prompt('Event Title:');

                if (title){
                    calendar.fullCalendar('renderEvent',{
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },true);
                }
                calendar.fullCalendar('unselect');
            },
            editable: true
        });
    }.on('didInsertElement'),
});
