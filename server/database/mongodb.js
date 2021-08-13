const { MongoClient } = require('mongodb')
const User = require('./User.database')
const Food = require('./Food.database')
const Order = require('./Order.database')
const Review = require('./Review.database')



const dbName = process.env.dbName
const dbUser = process.env.dbUser
const dbPass = process.env.dbPass
const url = `mongodb+srv://${dbUser}:${dbPass}@cluster0.ltldm.mongodb.net/${dbName}?retryWrites=true&w=majority`

let mongodb;
let Users;
let Foods;
let Reviews;

function connect(callback) {
    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client) => {
        mongodb = client.db(dbName);
        Users = new User(mongodb);
        Foods = new Food(mongodb);
        Orders = new Order(mongodb);
        Reviews = new Review(mongodb)
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

function order() {
    return Orders;
}

function review() {
    return Reviews;
}


module.exports = {
    connect,
    get,
    user,
    food,
    order,
    review
};