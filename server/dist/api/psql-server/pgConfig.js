'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initConfigs = function initConfigs(app) {

  app.set('PG_USER', process.env.PG_USER || 'camdenshaw');
  app.set('PG_PASSWORD', process.env.PG_PASSWORD || 'camdenshaw');
  app.set('PG_DATABASE', process.env.PG_DATABASE || 'boom');
  app.set('PG_HOST', process.env.PG_HOST || 'localhost');
};

exports.default = initConfigs;