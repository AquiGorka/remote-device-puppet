"use strict";

var Promise = require('bluebird'),
	peer,
	connection,
	PeerJSKey = '';

alert('src/libs/remote-device/puppet.js :: Add your own PeerJS api key');

var Puppet = {
	connect: function (id) {
		if (id) {
			return new Promise(function (resolve, reject) {
				//
				peer = new Peer({ key: PeerJSKey });
				//
				connection = peer.connect(id);
				connection.on('open', function () {
					resolve();
				});
			});
		} else {
			return Promise.reject('Puppet connect error: Please provide an id.');
		}
	},
	send: function (data) {
		if (connection) {
			connection.send(data);
		}
		return this;
	},
	destroy: function () {
		if (peer) {
			peer.destroy();
		}
		return this;
	}
};

module.exports = Puppet;
