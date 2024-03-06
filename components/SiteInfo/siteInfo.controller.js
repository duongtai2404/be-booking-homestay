const _ = require('lodash');
const axios = require('axios');

const getSiteInfo = async (req, res, next) => {
    try {
        console.log(`[INFO] getSiteInfo: with payload >>`)

        let siteInfo = await axios({
            method: 'POST',
            url: 'https://booking-kohl-six.vercel.app/siteInfo'
        });

        siteInfo = siteInfo?.data
        console.log(siteInfo?.data);

        res.json({
            ...siteInfo
        });
    } catch (error) {
        console.log(`[ERROR] getSiteInfo: ${error.message}`)
    }
};


module.exports = {
    getSiteInfo
};
