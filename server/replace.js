module.exports = function(text) {
  var re = text.replace(/<[^>]*>/, "");
  return re;
}
