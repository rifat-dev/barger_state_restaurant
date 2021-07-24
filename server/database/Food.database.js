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
}

module.exports = Food