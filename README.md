thrift-examples
===============

Requirements
------------
* Python: `$ pip install -r requirements.txt`,
* Node.js: `$ npm install`,
* Code generator: [Apache Thrift](https://thrift.apache.org/) (requires only for development).

Run
---
* Server: `$ ./python.py`,
* Python client: `$ ./client.py` or `$ python ./client.py`,
* Nodejs client: `$ ./client.js` or `$ node ./client.js`.

Output example
--------------
```bash
$ ./server.py
Starting python server...
Hello from Python!
Hello from JavaScript!
```
```bash
$ ./client.py
pong
```
```bash
$ ./client.js
pong
```
