module.exports = function(text) {
  var re = text.replace(/<[^>]*>/, "");
  var re2 = re.replace(/&#[0-9]*;/, "");
  return re2;
}
