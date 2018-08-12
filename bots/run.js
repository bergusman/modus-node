const config = require('../config')

const Bot = require('./bot')

const seeta = new Bot({
    name: 'Seeta',
    main: {
        ws: config.main.ws,
        secret: '0xa69343cfe238406702b6e4cb6ebb35e92c08fb1e4ea42bda4ba1700803966c6d'
    },
    auction: {
        ws: config.auction.ws,
        auction: config.auction.contracts.auction,
        secret: '0xa69343cfe238406702b6e4cb6ebb35e92c08fb1e4ea42bda4ba1700803966c6d'
    },
    tokens: {
        '0x6e8c1223e027de8e9a7f9b910ad6190458a1ce5e': {
            name: 'Maker',
            symbol: 'MKR',
            decimal: 4,
            address: '0x6e8c1223e027de8e9a7f9b910ad6190458a1ce5e',
            price: 1.46
        },
        '0x4133bc0d26756ca12eb06d2dc7cfbdac2d9595fb': {
            name: 'OmiseGO',
            symbol: 'OMG',
            decimal: 4,
            address: '0x4133bc0d26756ca12eb06d2dc7cfbdac2d9595fb',
            price: 0.013
        },
        '0xa17fafbab3a66262509c27bf4430bb4ec86af33a': {
            name: 'StatusNetwork',
            symbol: 'SNT',
            decimal: 4,
            address: '0xa17fafbab3a66262509c27bf4430bb4ec86af33a',
            price: 0.00013
        },
        '0xe403a838cfe077ba2cfd24c1d04a7e8648377f13': {
            name: 'Bancor',
            symbol: 'BNT',
            decimal: 4,
            address: '0xe403a838cfe077ba2cfd24c1d04a7e8648377f13',
            price: 0.0052
        }
    }
})

const geeta = new Bot({
    name: 'Geeta',
    main: {
        ws: config.main.ws,
        secret: '0x9ffd3c522699f25cc096095ae45cfdeae8bfb81c43335b0edf4fff4f4963fc65'
    },
    auction: {
        ws: config.auction.ws,
        auction: config.auction.contracts.auction,
        secret: '0x9ffd3c522699f25cc096095ae45cfdeae8bfb81c43335b0edf4fff4f4963fc65'
    },
    tokens: {
        '0x6e8c1223e027de8e9a7f9b910ad6190458a1ce5e': {
            name: 'Maker',
            symbol: 'MKR',
            decimal: 4,
            address: '0x6e8c1223e027de8e9a7f9b910ad6190458a1ce5e',
            price: 1.6
        },
        '0x4133bc0d26756ca12eb06d2dc7cfbdac2d9595fb': {
            name: 'OmiseGO',
            symbol: 'OMG',
            decimal: 4,
            address: '0x4133bc0d26756ca12eb06d2dc7cfbdac2d9595fb',
            price: 0.008
        },
        '0xa17fafbab3a66262509c27bf4430bb4ec86af33a': {
            name: 'StatusNetwork',
            symbol: 'SNT',
            decimal: 4,
            address: '0xa17fafbab3a66262509c27bf4430bb4ec86af33a',
            price: 0.0003
        },
        '0xe403a838cfe077ba2cfd24c1d04a7e8648377f13': {
            name: 'Bancor',
            symbol: 'BNT',
            decimal: 4,
            address: '0xe403a838cfe077ba2cfd24c1d04a7e8648377f13',
            price: 0.002
        }
    }
})

seeta.run()
geeta.run()
