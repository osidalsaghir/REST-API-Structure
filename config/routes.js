'use strict';

const car_routes = require('../src/routes/cat');

module.exports.setRoutes = ( app ) => {
app.use("/cat", car_routes);

};