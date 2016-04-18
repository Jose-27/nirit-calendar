"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('jo/app', ['exports', 'ember', 'jo/resolver', 'ember-load-initializers', 'jo/config/environment'], function (exports, _ember, _joResolver, _emberLoadInitializers, _joConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _joConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _joConfigEnvironment['default'].podModulePrefix,
    Resolver: _joResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _joConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('jo/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'jo/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _joConfigEnvironment) {

  var name = _joConfigEnvironment['default'].APP.name;
  var version = _joConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
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
define('jo/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('jo/router', ['exports', 'ember', 'jo/config/environment'], function (exports, _ember, _joConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _joConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('jo/config/environment', ['ember'], function(Ember) {
  var prefix = 'jo';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("jo/app")["default"].create({"name":"jo","version":"0.0.0+7584f6ba"});
}

/* jshint ignore:end */
//# sourceMappingURL=jo.map