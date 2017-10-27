// const express = require('express');
// const bodyParser = require('body-parser');
// const initPostgres = require('./pg-resource');
// const initConfigs = require('./config');

// const app = express();
// const PORT = process.env.PORT;

// initConfigs(app);
// const database = initPostgress(app);

// app.use(express.static(__dirname));

// app.get("/time", async (req, res) => {
//   const time = await database.query('SELECT NOW() as now');
//   console.log(time);
//   res.send(time.rows[0].end());
// });

// app.listen(PORT, init);

// function init(err) {
//   !err && console.log(`Express was started on port ${PORT}`)
// }