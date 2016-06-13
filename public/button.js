var Button = {};

Button.create = function() {
  var $button = $('<input type="button" id="create-button" value="Create" />');

  $button.click(Button.handleClick.bind(this));

  $button.appendTo($('#app-container'));
};

Button.handleClick = function () {
  TextBox.create();
};

