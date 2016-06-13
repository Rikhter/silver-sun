
var TextBox = {};

TextBox.create = function () {
  var $textBox = $('<textarea id="text-box" />');
  $textBox.appendTo($('body'));
};

TextBox.destroy = function () {
  $('#text-box').remove();
};

