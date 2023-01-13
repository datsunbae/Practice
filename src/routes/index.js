const authorRouter = require('./authorRouter');
const categoryRouter = require('./categoryRouter');
const bookRouter = require('./bookRouter');


function routes(app){
    app.use('/api/v1/author', authorRouter);
    app.use('/api/v1/category', categoryRouter);
    app.use('/api/v1/book', bookRouter);
}

module.exports = routes;