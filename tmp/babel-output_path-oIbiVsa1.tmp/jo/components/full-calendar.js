define("jo/components/full-calendar", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Component.extend({
        newEvent: "",
        eventTitle: "",

        _initializeCalendar: (function () {

            var date = new Date(),
                d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear(),
                self = this,
                calendar = $('#calendar');
            return calendar.fullCalendar({
                header: {
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
                select: function select(start, end, allDay) {
                    var title = prompt('Event Title:');

                    if (title) {
                        calendar.fullCalendar('renderEvent', {
                            title: title,
                            start: start,
                            end: end,
                            allDay: allDay
                        }, true);
                    }
                    calendar.fullCalendar('unselect');
                },
                editable: true,
                events: this.theEvents,
                editable: true
            });
        }).on('didInsertElement'),

        actions: {
            addEvent: function addEvent() {
                var newEvent = { title: this.eventTitle, start: this.newEvent, allDay: false };
                this.theEvents.pushObject(newEvent);
                this.$("#calendar").fullCalendar('renderEvent', newEvent, true);
            }
        }
    });
});