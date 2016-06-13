QUnit.module('Text Box', {});

QUnit.test('Create a text box', function(assert) {
  TextBox.create();
  var $boxElement = $('#text-box');

  assert.ok($boxElement.length == 1, 'element exists');
  assert.equal($boxElement.prop('tagName').toLowerCase(), 'textarea', 'element is a text area tag');
  TextBox.destroy();
});

QUnit.test('Destroy the text box', function(assert) {
  TextBox.create();
  TextBox.destroy();
  var $textBoxAfterDestroy = $('#text-box');

  assert.ok($textBoxAfterDestroy.length == 0, 'text box destroyed');
});