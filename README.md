# Coin Trigger

Coin Trigger exposes the New cryptocurrencies added to CoinMarketCap in the last 30 days

## How it works

The data from CoinMarketCap new cryptocurrencies is updated unexpectedly so to be on the safer side, every minute, our coin trigger script scraps data from the CoinMarketCap new cryptocurrencies source, and updated it in our database. Where we made it available to the public through https://coin-trigger.azurewebsites.net and https://coin-trigger.herokuapp.com

## Doc

**BASE URL:**

- https://coin-trigger.azurewebsites.net
- https://coin-trigger.herokuapp.com

To work with our API, using any of the base URL above (I suggest you use https://coin-trigger.herokuapp.com)

### GET NEW COINS 

**`{BASE_URL}/api/v1/new/coin`**

This route will let you get a list of all the new cryptocurrencies added to CoinMarketCap in the last 30 days

Example:

```bash
curl https://coin-trigger.herokuapp.com/api/v1/coin/new 
```

## Contributing

Find an awesome feature or a thing we can add to make this project more useful? Feel free to make a pull request.
## Author

[Vincent Iroleh](http://iroleh.tech)