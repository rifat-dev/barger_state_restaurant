const { ObjectID } = require('mongodb')

class User {
    constructor(db) {
        this.collection = db.collection('users');
    }

    create = async(user) => {
        const { insertedId } = await this.collection.insertOne(user);
        const newUser = await this.collection.find({ _id: ObjectID(insertedId) }).project({ password: 0 }).toArray()
        return newUser[0];
    }

    find = async(email) => {
        const user = await this.collection.find({ email: email }).toArray()
        return user[0];
    }

    findOneById = async(id) => {
        const newUser = await this.collection.find({ _id: ObjectID(id) }).project({ password: 0 }).toArray()
        return newUser[0];
    }


}


module.exports = User