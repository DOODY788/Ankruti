
"use strict"

const { MongoClient } = require('mongodb')
const preset = require('../chunks/preset.json');

module.exports = class Database{
    constructor(){
        this.preset = JSON.parse(JSON.stringify(preset));
        this.network = this.preset.Networks;
        this.Database = this.network.snip;
    }

    async pull(form,parameters){
        const client = new MongoClient(this.Database.url);
        client.connect();
        const db = client.db('snippets');
        const collection = db.collection('outlets');
        console.log('hello');
        console.log(await collection.find({}).toArray())
    }
}
