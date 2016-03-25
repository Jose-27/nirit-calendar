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
                left: 'prev, next today',
                center: 'title',
                right: 'month, agendaWeek,agendaDay'
            },
            defaultview: 'month',
            selectable: true,
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
