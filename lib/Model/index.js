var uuid = require('node-uuid');
var racer = require('../racer');
var util = require('../util');

module.exports = Model;

// Extend model on both server and client
require('./events');
require('./scope');
require('./collections');
require('./mutators');

// Extend model for server
util.serverRequire(__dirname + '/bundle');

// Extend model for browser
if (!util.isServer) require('./connection');

function Model() {
  this.flags || (this.flags = {});

  racer.emit('Model:init', this);
}

Model.prototype.id = function() {
  return uuid.v4();
};