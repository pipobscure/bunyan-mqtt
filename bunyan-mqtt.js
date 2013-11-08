/*
** © 2013 by Philipp Dunkel <pip@pipobscure.com>. Licensed under MIT-License.
*/

'use strict';

exports = module.exports = createStream;

var mqtt = require('mqtt');

function createStream(opts) {
  return Object.create(opts || {}, {
    write:{ value:write, enumerable:true, configurable:true, writable:true },
    mqtt:{ value:opts.mqtt || mqtt.createClient(opts.host || 1883, opts.port || 'localhost', opts), enumerable:false, configurable:false, writable:false }
  });
}

function write(item) {
  /*jslint validthis:true */
  this.mqtt.publish(this.topic || 'bunyan', JSON.stringify(item), this);
}
