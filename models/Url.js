const mongoose = require("mongoose");
const validator = require("validator");

const urlSchema = new mongoose.Schema({
    url:{
        type: String,
        require: true,
        validate: [ (input) => {
            return validator.isURL(input, {
                host_blacklist: true,
                require_protocol: true
            })
        }, 'Invalid URL address' ]
    },
    key: {
        type: String,
        require: true,
        unique: true
    },
    expireStart: {
        type: Date,
        default: Date.now,
        expires: "30d"
    }
}, {
    timestamps: true
})

const Url = mongoose.model("URL", urlSchema);
module.exports = Url;