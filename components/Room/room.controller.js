const _ = require('lodash');
const axios = require('axios');


const checkAvailable = async (req, res, next) => {
    try {
        console.log(` checkAvailable: with payload >> ${JSON.stringify(req?.body)}`)
        // let { roomId, from, to } = req.body;

        let checkAvailable = await axios({
            method: 'POST',
            url: `${process.env.HOST_VERCEL_BOOKING}/room/checkAvailable`,
            data: {
                ...req?.body
            }
        });
        console.log(`Response /room/checkAvailable >> ${JSON.stringify(checkAvailable?.data)}`);

        if (checkAvailable?.status === 200) {
            res.status(200).json({
                ...checkAvailable?.data
            });
        } else {
            throw new Error('Lỗi call api');
        }

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ code: 1001, message: error.message });
    }
};

const searchRoom = async (req, res, next) => {
    try {
        let searchRoom = await axios({
            method: 'POST',
            url: `${process.env.HOST_VERCEL_BOOKING}/room/search`,
            data: {
                ...req?.body
            }
        });

        if (searchRoom?.status === 200) {
            res.status(200).json({
                ...searchRoom?.data
            });
        } else {
            throw new Error('Lỗi call api');
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ code: 1001, message: error.message });
    }
};

module.exports = {
    checkAvailable,
    searchRoom
};
