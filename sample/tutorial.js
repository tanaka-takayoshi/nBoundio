var boundio = require('../boundio');
var Boundio = new boundio.Boundio();

//call phone

var phone_number = '0000000000'; // please edit valid phone number
console.log('Make a call to ' + phone_number);

Boundio.call(phone_number, 'file(000001)', function(error, data) {
    if (error) {
        console.error('error occured.');
        console.error(error);
    } else {
        console.log('call success');
        console.log(data);
    }});