const cron = require('node-cron');
const scrapper = require('./scrapper')

// Schedule tasks (scrapper function) to be run on the server every minute.
cron.schedule('* * * * *', async function () {
    scrapper();
});

module.exports = cron;
