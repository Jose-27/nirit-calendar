define('jo/components/aside-calendar', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        _initializeCalendar: (function () {

            /*var date = new Date(),
                d = date.getDate(),
                m = date.getMonth(),
                y = date.getFullYear(),*/
            var calendar = this.$('#aside-calendar');
            return calendar.fullCalendar({
                header: {
                    left: 'title'
                },
                events: this.theEvents,
                defaultview: 'month',
                selectable: true
            });
        }).on('didInsertElement')

    });
});