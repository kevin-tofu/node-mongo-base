const express = require('express')
const config = require('./config')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true })) // Enables POST

// app.use('/', routes.router)
app.use("/", require("./routes.js"))
app.get('/', ( req, res ) => {
  res.send({ status: 'ok'}).status(200);
});


app.use((err, req, res, next) => {
  const {statusCode = 500, message} = err
  res.status(statusCode).send(message)
})
app.listen(config.app_port, () =>
  console.log(`
  🚀 Server ready at: http://localhost:${config.app_port} ⭐️`
  ),
)

module.exports = app
