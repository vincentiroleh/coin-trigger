const Coins = require('../models')

const Controller = {
    async getCoins(req, res) {
        try {
            await require('../jobs/scrapper');
            const coins = await Coins.find({}, { _id: 0, __v: 0 });
            res.status(200).render('index', { coins })
        } catch (error) { return res.status(500).json({ success: false, error }) }
    }

}

module.exports = Controller;