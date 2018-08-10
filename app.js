const express = require('express')
const app = express()
const engines = require('consolidate')

app.engine('html', engines.nunjucks)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('hello', { 'name': 'Templates' })
})

app.use((req, res) => {
    res.sendStatus(404)
})

app.listen(3000, () => {
    console.log('Express server listening on port 3000')
})