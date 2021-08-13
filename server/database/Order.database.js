const { ObjectID } = require('mongodb')
class Order {
    constructor(db) {
        this.collection = db.collection('orders');
    }

    create = async(orderDetails) => {
        const result = await this.collection.insertOne(orderDetails);
        return result.ops[0];
    }

    find = async() => {
        const orders = await this.collection.find().toArray();
        return orders;
    }

    findByUser = async(id) => {
        const orders = await this.collection.find({ userId: ObjectID(id) }).toArray();
        return orders;
    }

    findOneById = async(id) => {
        const order = await this.collection.findOne({ _id: ObjectID(id) });
        return order
    }

}

module.exports = Order