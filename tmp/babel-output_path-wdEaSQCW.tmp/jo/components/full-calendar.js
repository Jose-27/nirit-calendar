define("jo/components/full-calendar", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Component.extend({
        newEvent: "",
        eventTitle: "",

        _initializeCalendar: (function () {

            var NUM_COLUMNS = 2;
            var calendar = this.$('#calendar');

            return calendar.fullCalendar({
                defaultView: 'multiColAgendaWeek',
                header: {
                    left: 'prev,today,next,title',
                    center: 'month, multiColAgendaDay,multiColAgendaWeek'
                },
                views: {
                    multiColAgendaDay: {
                        type: 'multiColAgenda',
                        duration: { days: 1 },
                        numColumns: NUM_COLUMNS,
                        columnHeaders: ['Column 1', 'Column 2']
                    },
                    multiColAgendaWeek: {
                        type: 'multiColAgenda',
                        duration: { weeks: 1 },
                        numColumns: NUM_COLUMNS,
                        columnHeaders: ['Col. 1', 'Col. 2']
                    }
                },
                googleCalendarApiKey: 'AIzaSyBXrecyxcZX96gUyqb8AeH8zuo3GSno5t0',
                events: {
                    googleCalendarId: 'usa__en@holiday.calendar.google.com'
                },
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