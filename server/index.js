const express = require("express")

const app = express()

app.set('secret', '12dafassgfeagdsa')

app.use('/uploads', express.static(__dirname + '/uploads'))

app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)
require('./routers/admin')(app)
require('./routers/web')(app)

app.listen(3000, () => {
    console.log("http://localhost:3000");
})