const fs = require('fs');
const constants = require('constants');

var key = "";
var cert = "";
var dh = "";

try { key = fs.statSync('./.ssl/key.pem'); }
catch(err) { console.log('key does not exist'); }

try { cert = fs.statSync('./.ssl/cert.pem'); }
catch(err) { console.log('cert does not exist'); }

try { dh = fs.statSync('./.ssl/dh.pem'); }
catch(err) { console.log('dh does not exist'); }

module.exports = {
  "NAME": "BTCS Explorer",
  "ADMIN": {
    "USERNAME": "ADMIN_USERNAME",
    "PASSWORD": "SOME_SECRET_PASSWORD",
    "SECRET": "SOME_SECRET_LONG_STRING"
  },
  "EMAIL": "ADMIN_EMAIL",
  "DB": {
    "HOST": "localhost",
    "DBNAME": "BTCS",
    "RETRIES": 50
  },
  "FRONTEND": {
    "HOST": "exsymbiotic.com",
    "PORT": 12401,
    "TOKEN_EXPIRATION": 1200,
     "SSL" : {
       "ENABLED": false,
       "secureOptions": constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_SSLv2,
       "key": key,
       "cert": cert,
       "dhparam": dh
     }
  },
  "DAEMON": {
    "PROTOCOL" : "http",
    "HOST" : "127.0.0.1",
    "PORT" : 11333,
  },
  "REMOTES" : [{
    hostname : 'explorer.cryptosybiotic.com',
    ip : '127.0.0.1',
    port : 11333
  }],
  "ALGORITHM"       : "cn",
  "LOCALPOOL"       : "",
  "WEBMINER"        : "",
  "PAPERWALLET"     : {
    coinUnitPlaces    : 9,
    coinSymbol        : 'BTCS',
    coinName          : 'Bytcoin Symbiotic',
    coinUriPrefix     : 'btcs:',
    addressPrefix     : 0x3c8bd0
  },
  "MINING_APPS"     : [

    {
      "NAME"       :  "SRBMiner",
      "LINK"       :  "https://bitcointalk.org/index.php?topic=3167363.0",
    },{
      "NAME"       :  "xmrig-nvidia",
      "LINK"       :  "https://github.com/",
    }
  ],
  "BENCHMARKS"      : [
    {
      "MANUFACTURER" : "Intel",
      "TYPE"  : "CPU",
      "MODEL" : "I7-3770",
      "CONSUMPTION" : 92,
      "MEMORY" : 0,
      "HASHRATE" : 150
    },{
      "MANUFACTURER" : "AMD",
      "TYPE"  : "GPU",
      "MODEL" : "RX550",
      "CONSUMPTION" : 40,
      "MEMORY" : 2,
      "HASHRATE" : 220
    },{
      "MANUFACTURER" : "AMD",
      "TYPE"  : "GPU",
      "MODEL" : "RX550",
      "CONSUMPTION" : 43,
      "MEMORY" : 4,
      "HASHRATE" : 220
    },
  ],
  "BLOCKTARGETINTERVAL" : 120,
  "HISTORY_BLOCKS_LEN" : 64,
  "GET_POOLS_SECONDS" : 60,
  "GET_MEMPOOL_SECONDS" : 10,
  "GET_INFO_SECONDS" : 5,
  "GET_BLOCKSLIST_MINUTES" : 1,
  "LIGHT_BLOCKS_HISTORY" : 15,
  "HISTORY_CHART_MINUTES" : 30,
  "EXCHANGE_UPDATE_INTERVAL" : 60,
  "TO_TICKER" : "USDT-BTCS",
  "EXCHANGES" : [
    {
      "NAME" : "TRADEOGRE",
      "URL" : "https://tradeogre.com/api/v1/markets"
    }
  ],
  "COINUNITS" : Math.pow(10, 19),
  "MAXSUPPLY" : 100000000000, // 10Mil
  "SYMBOL" : "BTCS",
  "HIDE_DOMINANT_POOLS" : true,
  "DOMINANCE_PERCENT" : 40,
  "POOLS" : [{
    "frontend": "xao.mine2gether.com",
    "api": "https://xao.mine2gether.com/api/stats",
    "rootapi": "https://xao.mine2gether.com/api/stats",
    "color": "#B45F04",
    "v": 1
  }],
  "VERBOSITY" : 2
}
