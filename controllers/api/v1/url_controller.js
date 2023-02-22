const Url = require("../../../models/Url");
const crypto = require("crypto");

exports.addUrl = async (req, res) => {
    try {
        // genareting random key of length 8 and creating object
        const url = await Url.create({url: req.query.url, key: crypto.randomBytes(4).toString("hex")});

        res.status(201).json({
            data: {
                actual_url: url.url,
                custom_url: `${req.headers.host}/${url.key}`
            },
            success: true,
            message: "URL shortened successfully. It is valid only for 30 days from the last use or visit."
        });
        
    } catch (err) {
        console.log("Error in adding url", err);
        res.status(500).json({
            data: null,
            success: false,
            message: err.message
        })
    }
}