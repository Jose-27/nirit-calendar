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