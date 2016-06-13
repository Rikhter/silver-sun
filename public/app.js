var App = {};

App.create = function() {
  createContainer();
  createButton();
};

function createContainer() {
  var $container = $('<div id="app-container" />');
  $container.appendTo($('body'));
}

function createButton() {
  Button.create();
}

App.destroy = function () {
  destroyContainer();
};

function destroyContainer() {
  $('#app-container').remove();
}