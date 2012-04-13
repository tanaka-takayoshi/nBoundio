var restler = require('restler');
var target = 'https://boundio.jp/api/';
Boundio.prototype.call = function(call, cast, callback) {
    var self = this;
    var url;
    if (self.development) {
        url = target + 'vd1/' + self.userid +'/call';
    } else {
        url = target + 'v1/' + self.userid +'/call';
    }
    restler.post(url, {
        data: { key: self.apikey,
            tel_to: call,
            cast: cast}}
        ).on('success', function(data) {
            callback(null, data);
        }).on('error', function(data) {
            callback(error);
        });
};

function Boundio(config) {
    if (!config) {
        config = require('./conf/config');
    }
    this.userid = config.userid;
    this.apikey = config.apikey;
    this.authkey = config.authkey;
    this.development = config.development;
};

exports.Boundio = Boundio;