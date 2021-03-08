const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')
const fetch = require('node-fetch')
const port = 3000

app.engine('.hbs', exphbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	fetch(
		'https://api.openweathermap.org/data/2.5/weather?q=Mathura&units=metric&appid=3b28e9abd4648b43df6fc8683b5b6d62'
	)
		.then((response) => response.json())
		.then((body) => {
			res.render('index', {
				layout: false,
				city: body.name,
				country: body.sys.country,
				temp: body.main.temp,
				temp_min: body.main.temp_min,
				temp_max: body.main.temp_max,
			})
		})
		.catch((error) => {
			console.error('There has been a problem with API request:', error)
		})
})

app.listen(port, () => {
	console.log(`App running in ${process.env.NODE_ENV} mode at port: ${port}`)
})
