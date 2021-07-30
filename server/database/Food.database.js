const { ObjectID } = require('mongodb')
class Food {
    constructor(db) {
        this.collection = db.collection('foods');
    }

    create = async(food) => {
        const result = await this.collection.insertOne(food);
        return result.ops[0];
    }

    find = async() => {
        const foods = await this.collection.find().toArray();
        return foods;
    }

    findOneById = async(foodId) => {
        const food = await this.collection.findOne({ _id: ObjectID(foodId) });
        return food
    }

    findSingleFood = async(foodId) => {
        const food = await this.collection.findOne({ _id: ObjectID(foodId) });
        const relatedFoods = await this.collection.find({ part: food.part }).toArray();
        return { food, relatedFoods };
    }


}

module.exports = Food