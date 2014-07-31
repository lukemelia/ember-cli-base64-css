'use strict';

var base64CSS = require('broccoli-base64-css');

function EmberCLIBase64CSS(project) {
  this.project = project;
  this.name = 'Ember CLI Base64CSS';
}

EmberCLIBase64CSS.prototype.postprocessTree = function (type, tree) {
  if (type === 'all' || type === 'styles') {
    tree = base64CSS(tree, this.options);
  }

  return tree;
};

EmberCLIBase64CSS.prototype.included = function included(app) {
  this.app = app;
  this.options = this.app.options.base64CSS;
};

EmberCLIBase64CSS.prototype.treeFor = function treeFor() {};

module.exports = EmberCLIBase64CSS;
