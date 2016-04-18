define('jo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'jo/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _joConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_joConfigEnvironment['default'].APP.name, _joConfigEnvironment['default'].APP.version)
  };
});