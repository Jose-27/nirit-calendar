QUnit.module('JSHint - components/full-calendar.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/full-calendar.js should pass jshint.\ncomponents/full-calendar.js: line 43, col 21, Duplicate key \'editable\'.\ncomponents/full-calendar.js: line 10, col 17, \'d\' is defined but never used.\ncomponents/full-calendar.js: line 11, col 17, \'m\' is defined but never used.\ncomponents/full-calendar.js: line 12, col 17, \'y\' is defined but never used.\ncomponents/full-calendar.js: line 13, col 17, \'self\' is defined but never used.\ncomponents/full-calendar.js: line 14, col 28, \'$\' is not defined.\n\n6 errors');
});
