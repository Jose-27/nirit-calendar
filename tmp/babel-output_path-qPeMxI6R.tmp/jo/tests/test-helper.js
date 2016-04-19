define('jo/tests/test-helper', ['exports', 'jo/tests/helpers/resolver', 'ember-qunit'], function (exports, _joTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_joTestsHelpersResolver['default']);
});