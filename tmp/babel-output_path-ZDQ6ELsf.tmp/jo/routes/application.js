define('jo/routes/application', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return {
                events: _ember['default'].A([{ title: this.eventTitle, start: Date.now() }])
            };
        }
    });
});