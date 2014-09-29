'use strict';
var base64CSS = require('broccoli-base64-css');

module.exports = {
  name: 'ember-cli-base64-css',
  postprocessTree: function (type, tree) {
    if (this.options.enabled) {
      if (type === 'all' || type === 'styles') {
        tree = base64CSS(tree, this.options);
      }
    }
    return tree;
  },
  included: function included(app) {
    this.app = app;
    this.options = this.app.options.base64CSS;
    if (this.options.enabled === undefined) {
      this.options.enabled = true;
    }
  }
}
