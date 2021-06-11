const cron = require('node-cron');
const Scrapper = require('./scrapper')

// Schedule tasks (scrapper function) to be run on the server every minutes.
cron.schedule('* * * * *', function () {
    console.log('running a task every minute');
    Scrapper()
});

module.exports = cron;