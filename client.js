#!/usr/bin/env node

var thrift = require('thrift'),
    ttransport = thrift.TBufferedTransport(),
    tprotocol = thrift.TBinaryProtocol();

var Example = require('./jsgen/Example.js');

var connection = thrift.createConnection('localhost', 30303, {transport: ttransport, protocol: tprotocol}),
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
