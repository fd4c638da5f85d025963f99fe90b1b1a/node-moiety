const express     = require('express')
const mongoose    = require('mongoose')
const exphbs      = require('express-handlebars')
const pagesRoutes = require('./routes/pages')

const app      = express()
const hbs      = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(pagesRoutes)

async function start() {
  try {
    await mongoose.connect('mongodb+srv://hr:superpassword@cluster0-abezs.mongodb.net/moiety', {
      useNewUrlParser: true,
      useFindAndModify: false
    })
    app.listen(2280, () => {
      console.log('Сервер запущен, подключенные модули:/n отсутствуют...')
    })
  } catch(e) {
    console.log('Обнаружены следующие ошибки:'+e)
  }
}

start();