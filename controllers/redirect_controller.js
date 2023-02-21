const Url = require("../models/Url");

exports.redirectTo = async (req, res) => {
    try {
        const url = await Url.findOne({key: req.params.key});
        // redirecting to actual url
        if (url) {
            // change url expires time for further 30 days
            url.lastUse = Date.now();
            await url.save();

            return res.redirect(url.url);
        }
        throw new Error("URL not found");

    } catch (err) {
        res.status(404).json({
            data: null,
            success: false,
            message: err.message
        });
    }
}