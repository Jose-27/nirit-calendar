import Ember from 'ember';

export default Ember.Component.extend({
    newEvent:"",
    eventTitle:"",

    _initializeCalendar: function(){

           /*var date = new Date(),
                d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear(),*/
                
                var calendar = this.$('#calendar');
        return calendar.fullCalendar({
            header:{
                left: 'prev,today,next,title',
                center: 'month, agendaWeek,agendaDay,year'
            },
            googleCalendarApiKey: 'AIzaSyBXrecyxcZX96gUyqb8AeH8zuo3GSno5t0',
            defaultview: 'month',
            numberOfMonths: 2,
            selectable: true,
            slotDuration: '00:05:0',
            selectHelper: true,
            /*eventRender: function(event, element) {
                            element.attr('title', event.title);
            },*/
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
            editable: true,
            events: {
                googleCalendarId: 'usa__en@holiday.calendar.google.com',
            }
        });
    }.on('didInsertElement'),

    actions: {
        addEvent: function(){
            var newEvent = {title: this.eventTitle, start: this.newEvent, allDay:false};
            this.theEvents.pushObject(newEvent);
            this.$("#calendar").fullCalendar('renderEvent', newEvent, true);
        }
    }
});
