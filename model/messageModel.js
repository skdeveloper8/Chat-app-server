const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {


        message: {
            text: {
                type: String,
                require: true,

            },
        },
        users: Array,
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            requred: true
        },
    },
    {
        timestamps: true,

    },



)

module.exports = mongoose.model("Messeges", schema);