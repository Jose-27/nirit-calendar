QUnit.module('JSHint - components/aside-calendar.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/aside-calendar.js should pass jshint.\ncomponents/aside-calendar.js: line 8, col 17, \'d\' is defined but never used.\ncomponents/aside-calendar.js: line 9, col 17, \'m\' is defined but never used.\ncomponents/aside-calendar.js: line 10, col 17, \'y\' is defined but never used.\ncomponents/aside-calendar.js: line 11, col 28, \'$\' is not defined.\n\n4 errors');
});
