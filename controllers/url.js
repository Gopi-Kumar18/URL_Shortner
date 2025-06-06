const  shortid = require("shortid");
const URL = require("../models/url"); 


async function generateNewShortUrl (req,res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({error : "url not found.."})
    }
  const shortID = shortid();

  await URL.create({
    shortId : shortID,
    redirectURL : body.url,
    visitHistory : []
  });


   return res.json({ 
        id: shortID,
        shortUrl: `http://localhost:8000/${shortID}`
    });
}

module.exports = {
    generateNewShortUrl
};


