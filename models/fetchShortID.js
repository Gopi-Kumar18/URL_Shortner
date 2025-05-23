const URL = require('./url');

const fetchShortID = async (req, res) => {
    const shortId = req.params.shortId;
    console.log(`Received shortId: ${shortId}`);

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: { timestamp: Date.now() },
                },
            },
            { new: true }
        );

        console.log('Database entry:', entry);

        if (!entry) {
            return res.status(404).send('URL not found');
        }

        res.redirect(entry.redirectURL);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

module.exports = fetchShortID;