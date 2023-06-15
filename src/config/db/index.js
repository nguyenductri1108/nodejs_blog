const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/my_todo");
        console.log("Connected to MongoDB");
    } catch (e) {
        console.log("Error connecting to MongoDB");
    }
}

module.exports = { connect };
