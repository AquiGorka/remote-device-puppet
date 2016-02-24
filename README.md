# Remote Device Puppet

### Description
Ever wanted to change your Android phone in for an iPhone?
How about we "virtually" do that?
This project includes two parts:
* Theater ([https://github.com/AquiGorka/remote-device-theater]([https://github.com/AquiGorka/remote-device-theater))
* Puppet (this repo)

The Theater expects a webRTC enabled browser to establish a p2p connection (this is the Puppet app). Once the connection is established the Theater renders a 3D virtual iPhone in the browser, the Puppet app sends gyroscope data to the Theater which rotates the virtual iPhone around accordingly.

### Technologies and tools used:

* Javascript
* React
* PeerJS
* webRTC
* ThreeJS
* WebGL
* CSS
* HTML
* Browserify
* Reactify (for JSX)
* npm (package manager and task runner)

### Build & Run
```sh
npm install
npm run build
npm run serve 8081
```
Clone the Theater repo, fire it up and wait for it to ask you to open up a webRTC enabled browser to: http://localhost:8081/dist/

Don't forget to get your own PeerJS api key and add it to /src/libs/remote-device/puppet.js

### Demo
[http://remote-device-theater.surge.sh/](http://remote-device-theater.surge.sh/)