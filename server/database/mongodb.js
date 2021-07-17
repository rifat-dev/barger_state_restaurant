const { MongoClient } = require('mongodb')
const User = require('./User.database')
const Food = require('./Food.database')



const dbName = process.env.dbName
const dbUser = process.env.dbUser
const dbPass = process.env.dbPass
const url = `mongodb+srv://${dbUser}:${dbPass}@cluster0.ltldm.mongodb.net/${dbName}?retryWrites=true&w=majority`

let mongodb;
let Users;
let Foods;

function connect(callback) {
    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client) => {
        mongodb = client.db(dbName);
        Users = new User(mongodb);
        Foods = new Food(mongodb)
        callback(err);
    });
}

function get() {
    return mongodb;
}

function user() {
    return Users;
}

function food() {
    return Foods;
}


module.exports = {
    connect,
    get,
    user,
    food
};