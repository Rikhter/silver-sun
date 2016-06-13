QUnit.module('Environment', {});

QUnit.test('Test framework ok', function(assert) {
  assert.ok( 1 == '1', 'Passed!' );
});

QUnit.test('JQuery exists', function(assert) {
  assert.ok($, 'JQuery exists');
});