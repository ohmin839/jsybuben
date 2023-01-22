const express = require('express');
const mongoose = require('mongoose');
const jsybubenApi = require('jsybuben-api');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.set('bufferCommands', false);
const mongoConfig = require('./mongoConfig');
mongoose.connect(mongoConfig.url, {
    useNewUrlParser: true,
    user: mongoConfig.user,
    pass: mongoConfig.pass,
    dbName: mongoConfig.dbName
}).then(() => {
    console.log('Connected to MongoDB.');
    mongoose.model('RawWord', require('jsybuben-mongodb').RawWordSchema);
}).catch(e => console.log(e));

app.get('/', (req, res) => {
    res.send(jsybubenApi.toAybuben('Barev Dzez:'));
});

app.post('/rawText', async (req, res) => {
    let text = req.body.value;
    let wordSet = jsybubenApi.toHayerenWordSet(text);
    for (let word of wordSet) {
        await mongoose.model('RawWord').updateOne(
            { text: word },
            { $set: {} },
            { upsert: true }
        );
    }
    res.sendStatus(200);
});

const port = 8888;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});