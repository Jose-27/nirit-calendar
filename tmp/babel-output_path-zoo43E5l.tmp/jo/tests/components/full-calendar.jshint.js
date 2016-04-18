define('jo/tests/components/full-calendar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/full-calendar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/full-calendar.js should pass jshint.\ncomponents/full-calendar.js: line 36, col 12, Expected \')\' and instead saw \':\'.\ncomponents/full-calendar.js: line 36, col 13, Missing semicolon.\ncomponents/full-calendar.js: line 37, col 19, Label \'addEvent\' on function statement.\ncomponents/full-calendar.js: line 37, col 19, Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.\ncomponents/full-calendar.js: line 37, col 27, Missing name in function declaration.\ncomponents/full-calendar.js: line 37, col 19, \'function\' is defined but never used.\ncomponents/full-calendar.js: line 43, col 2, Expected \'}\' to match \'{\' from line 3 and instead saw \')\'.\ncomponents/full-calendar.js: line 43, col 3, Expected \')\' and instead saw \';\'.\ncomponents/full-calendar.js: line 43, col 4, Missing semicolon.\ncomponents/full-calendar.js: line 36, col 5, \'actions\' is not defined.\n\n10 errors');
  });
});