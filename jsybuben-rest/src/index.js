const express = require('express');
const jsybuben = require('jsybuben-core');
const app = express();
const port = 8888;

app.get('/', (req, res) => {
    res.send(jsybuben.toAybuben('Barev Dzez:'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});