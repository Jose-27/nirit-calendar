define('jo/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'jo/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _joConfigEnvironment) {

  var name = _joConfigEnvironment['default'].APP.name;
  var version = _joConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});