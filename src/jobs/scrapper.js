const cheerio = require('cheerio');
const axios = require("axios");
const Coins = require('../models')

async function Scrapper() {
    console.log('Scrapping data from CoinMarketCap...');
    try {
        const url = 'https://coinmarketcap.com/new'
        const { data } = await axios.get(url)
        const $ = cheerio.load(data);

        const scrapedData = [];

        $("table > tbody > tr").each((index, element) => {
            const tds = $(element).find('td');

            const name = $(tds[2]).find('a').find('div').find('p:first').text().trim();
            const coin_symbol = $(tds[2]).find('a').find('div').find('p:last').text().trim();
            const coin_link = `https://coinmarketcap.com${$(tds[2]).find('a').attr('href').trim()}`;

            const price = $(tds[3]).text().trim();
            const _1h = $(tds[4]).text().trim();
            const _24h = $(tds[5]).text().trim();
            const volume = $(tds[7]).text().trim();
            const blockchain = $(tds[8]).text().trim();
            const added = $(tds[9]).text().trim();

            const tableRow = { name, coin_symbol, coin_link, price, _1h, _24h, volume, blockchain, added };
            scrapedData.push(tableRow)

            // const dbCoin = await Coins.find();
        })
        Coins.deleteMany({}).then(() => console.log('data deleted')).catch((err) => console.error(err))
        Coins.insertMany(scrapedData)
            .then(() => console.log('Data inserted'))
            .catch((err) => console.error(err))
    } catch (error) {
        console.error(error)
    }
};

module.exports = Scrapper();