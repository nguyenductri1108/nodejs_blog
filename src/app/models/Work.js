const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Work = new Schema({
    name: { type: String, maxLength: 10 },
    time: Number,
    createAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Work", Work);
