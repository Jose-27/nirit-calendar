define('jo/router', ['exports', 'ember', 'jo/config/environment'], function (exports, _ember, _joConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _joConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});