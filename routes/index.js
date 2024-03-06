const express = require('express');
const router = express.Router();

// const bookingRouter = require('../components/Booking/booking.router');
const roomRouter = require('../components/Room/room.router');
// const adminRouter = require('../components/Admin/admin.router');

// const adminController = require('../components/Admin/admin.controller');

require('dotenv').config();

router.get('/', (req, res) => {
    console.log('[log] Welcome to the API');
    res.json({
        message: 'Welcome to the API',
    });
});
// router.use('/booking', bookingRouter);
router.use('/room', roomRouter);
// router.use('/admin', adminRouter)
router.use('/siteInfo', require('../components/SiteInfo/siteInfo.router'))

module.exports = router;
