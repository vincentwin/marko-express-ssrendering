var template = require('./index.marko');

module.exports = function(req, res) {
  template.render({
    // Params and states here
  }, res);
};