class Food {
    constructor(db) {
        this.collection = db.collection('foods')
    }

    async create(food) {
        console.log("food")
    }
}

module.exports = Food