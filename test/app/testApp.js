QUnit.module('App', {});

QUnit.test('Create an app container', function(assert) {
  App.create();
  var $appContainer = $('#app-container');

  assert.ok($appContainer.length == 1, 'element exists');
  assert.equal($appContainer.prop('tagName').toLowerCase(), 'div', 'element is a div tag');
  App.destroy();
});

QUnit.test('Destroy the app container', function(assert) {
  App.create();
  App.destroy();
  var $containerAfterDestroy = $('#app-container');

  assert.ok($containerAfterDestroy.length == 0, 'container destroyed');
});