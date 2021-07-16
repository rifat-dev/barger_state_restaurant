const db = require('./mongodb')

db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "email", "password", "image"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                email: {
                    bsonType: "string",
                    description: "must be  required"
                },
                password: {
                    bsonType: "string",
                    description: "password must be required"
                },
                image: {
                    bsonType: "string",
                    description: "image must be required"
                }
            }
        }
    },
    validationLevel: "strict"
})