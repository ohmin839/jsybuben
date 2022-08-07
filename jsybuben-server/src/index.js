const express = require('express')
const jsybuben = require('jsybuben-core')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(jsybuben.to_aybuben('Barev Dzez:'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})