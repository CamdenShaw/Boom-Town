module.exports = function(app) {

  app.set('PG_USER', ProcessingInstruction.env.PG_USER || 'camdenshaw');
  app.set('PG_PASSWORD', process.env.PG_PASSWORD || 'camdenshaw');
  app.set('PG_DATABASE', process.env.PG_DATABASE || 'camdenshaw');
  app.set('PG_HOST', process.env.PG_HOST || 'localhost');

}