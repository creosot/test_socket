/**
 * Created by creosot on 17.03.15.
 */
var net = require('net');

var header = new Buffer(17);
header.writeUInt16BE(0x000f,0);
header.write('356307046475314',2);
var data = new Buffer(45);
data.write('0000000000000021080100000149371b2c3c00164322802134bb8000a600680c000000000000000010000bf8b',0,"hex");
//data.write('0000000000000021080100000113fc208dff00164322802134bb8000a600680c0000000000000000010000bf8b',0,"hex");

var client = new net.Socket();
client.connect(3000, '127.0.0.1', function() {
        console.log('Connected');
        client.write(header);
});

client.on('data', function(res) {
    console.log('Received: ' + res);
    client.write(data);
//    client.destroy(); // kill client after server's response
});

client.on('close', function() {
    console.log('Connection closed');
});