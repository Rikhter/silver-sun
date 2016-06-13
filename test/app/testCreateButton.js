QUnit.module('Create Button', {
  beforeEach: function () {
    App.create();
  },
  afterEach: function () {
    App.destroy();
  }
});

QUnit.test('Create button exists', function(assert) {
  var $buttonElement = $('#create-button');

  assert.ok($buttonElement.length == 1, 'element exists');
  assert.equal($buttonElement.prop('tagName').toLowerCase(), 'input', 'element is an input tag');
  assert.equal($buttonElement.attr("type"), 'button', 'input is of type button');
});

QUnit.test('Create button inside app container', function(assert) {
  var $buttonElement = $('#create-button');

  var $appContainer = $buttonElement.parent();
  assert.equal($appContainer.prop('tagName').toLowerCase(), 'div', 'element is a div tag');
  assert.equal($appContainer.attr('id'), 'app-container');
});

QUnit.test('When the create button is clicked show the input text box', function(assert) {
  var $buttonElement = $('#create-button');
  $buttonElement.click();

  var $textInput = $('#text-box');
  assert.ok($textInput.length == 1, 'element exists');
  assert.equal($textInput.prop('tagName').toLowerCase(), 'textarea', 'element is a text area element');

  TextBox.destroy();
});
