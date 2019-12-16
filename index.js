/*global someFunction, a*/
/*eslint no-undef: "error"*/

const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + './app'));

app.get("/", function(req, res) {
    res.sendFile('./app/index.html', {root: __dirname });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
}

    console.log(`server is listening on ${port}`)
})
