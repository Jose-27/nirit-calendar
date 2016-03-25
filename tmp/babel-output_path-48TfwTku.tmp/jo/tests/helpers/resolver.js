define('jo/tests/helpers/resolver', ['exports', 'jo/resolver', 'jo/config/environment'], function (exports, _joResolver, _joConfigEnvironment) {

  var resolver = _joResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _joConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _joConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});