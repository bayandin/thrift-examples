# thrift-examples

## Generate

```bash
thrift -out pygen/ --gen py example.thrift
thrift -out jsgen/ --gen js:node example.thrift
```

### Requirements
* Python: `$ pip install -r requirements.txt`,
* Node.js: `$ npm install`,
* Code generator: [Apache Thrift](https://thrift.apache.org/) (requires only for development).

### Run
* Server: `$ ./server.py`,
* Python client: `$ ./client.py` or `$ python ./client.py`,
* Node.js client: `$ ./client.js` or `$ node ./client.js`.

### Output
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
