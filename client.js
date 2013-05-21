#!/usr/bin/env node

var thrift = require('./node_modules/thrift'),
    ttransport = require('./node_modules/thrift/lib/thrift/transport.js'),
    tprotocol = require('./node_modules/thrift/lib/thrift/protocol.js');

var Example = require('./jsgen/Example.js');

var connection = thrift.createConnection('localhost', 30303, {transport: ttransport.TBufferedTransport, protocol: tprotocol.TBinaryProtocol}),
    client = thrift.createClient(Example, connection);

connection.on('error', function (err) {
    console.error(err);
});

client.ping(function (err, response) {
    if (err) {
        console.error(err);
    } else {
        console.log(response);
        client.say('Hello from JavaScript!', function (err) {
            if (err) {
                console.error(err);
            } else {
                connection.end();
            }
        });
    }
});
