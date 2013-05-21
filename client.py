#!/usr/bin/env python

from thrift import Thrift
from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol

from pygen.example import Example


try:
    transport = TSocket.TSocket('localhost', 30303)
    transport = TTransport.TBufferedTransport(transport)
    protocol = TBinaryProtocol.TBinaryProtocol(transport)
    client = Example.Client(protocol)
    transport.open()
    print client.ping()
    client.say('Hello from Python!')
    transport.close()

except Thrift.TException, tx:
    print "%s" % tx.message
