define("jo/components/full-calendar", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Component.extend({
        newEvent: "",
        eventTitle: "",

        _initializeCalendar: (function () {

            /*var date = new Date(),
                 d = date.getDate(),
                 m = date.getMonth(),
                 y = date.getFullYear(),*/
            var NUM_COLUMNS = 2;
            var calendar = this.$('#calendar');
            return calendar.fullCalendar({
                header: {
                    left: 'prev,today,next,title',
                    center: 'month, agendaWeek,agendaDay,year'
                },
                views: {
                    multiColAgendaDay: {
                        type: 'agendaWeek',
                        duration: { days: 1 },
                        numColumns: NUM_COLUMNS,
                        columnHeaders: ['Column 1', 'Column 2']
                    },
                    multiColAgendaWeek: {
                        type: 'agendaWeek',
                        duration: { weeks: 1 },
                        numColumns: NUM_COLUMNS,
                        columnHeaders: ['Col. 1', 'Col. 2']
                    }
                },
                googleCalendarApiKey: 'AIzaSyBXrecyxcZX96gUyqb8AeH8zuo3GSno5t0',
                allDaySlot: false,
                defaultview: 'month',
                numberOfMonths: 2,
                selectable: true,
                slotDuration: '00:20:00',
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
                events: {
                    googleCalendarId: 'usa__en@holiday.calendar.google.com'
                }
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