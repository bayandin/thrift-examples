#!/usr/bin/env node

var thrift = require('thrift'),
    ttransport = require('thrift/lib/thrift/transport.js'),
    tprotocol = require('thrift/lib/thrift/protocol.js');

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
