const initConfigs = function(app) {

    app.set('PG_USER', process.env.PG_USER || 'camdenshaw')
    app.set('PG_PASSWORD', process.env.PG_PASSWORD || 'camdenshaw')
    app.set('PG_DATABASE', process.env.PG_DATABASE || 'boom')
    app.set('PG_HOST', process.env.PG_HOST || 'localhost')

}

export default initConfigs