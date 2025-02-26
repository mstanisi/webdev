const express = require('express')
const indexRouter = require('./router/index');
const authorsRouter = require('./router/authors');
const booksRouter = require('./router/books');

const app = express()
const port = 3000

var handlebars = require('express-handlebars').create();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use('/', indexRouter);
app.use('/authors', authorsRouter);
app.use('/books', booksRouter);


// custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('<h1>404 - Not Found</h1>')
  })
  
  // custom 500 page
  app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
  })

    app.use('/', indexRouter);


app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`))
