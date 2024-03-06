const _ = require('lodash');
const axios = require('axios');

const getSiteInfo = async (req, res, next) => {
    try {
        let siteInfo = await axios({
            method: 'POST',
            url: `${process.env.HOST_VERCEL_BOOKING}/siteInfo`
        });

        if (siteInfo?.status === 200) {
            res.json({
                ...siteInfo?.data
            });
        } else {
            throw new Error('Lỗi call api');
        }

    } catch (error) {
        console.log(`[ERROR] getSiteInfo: ${error.message}`)
    }
};

module.exports = {
    getSiteInfo
};
