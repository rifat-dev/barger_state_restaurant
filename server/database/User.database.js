const { ObjectID } = require('mongodb')

class User {
    constructor(db) {
        this.collection = db.collection('users');
    }

    async create(user) {
        const { insertedId } = await this.collection.insertOne(user);
        const newUser = await this.collection.find({ _id: ObjectID(insertedId) }).project({ password: 0 }).toArray()
        return newUser[0]
    }

    async find(email) {
        const user = await this.collection.find({ email: email }).toArray()
        return user[0]
    }
}


module.exports = User