class Food {
    constructor(db) {
        this.collection = db.collection('foods')
    }

    async create(food) {
        const result = await this.collection.insertOne(food)
        return result.ops[0];
    }
}

module.exports = Food