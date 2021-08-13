const { ObjectID } = require('mongodb')
class Review {
    constructor(db) {
        this.collection = db.collection('reviews');
    }

    create = async(review) => {
        const result = await this.collection.insertOne(review);
        return result.ops[0];
    }

    find = async() => {
        const reviews = await this.collection.find().toArray();
        return reviews;
    }

    findByUser = async(id) => {
        const review = await this.collection.find({ userId: ObjectID(id) }).toArray();
        return review;
    }

}

module.exports = Review