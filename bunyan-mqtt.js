/*
** © 2013 by Philipp Dunkel <pip@pipobscure.com>. Licensed under MIT-License.
*/

'use strict';

exports = module.exports = createStream;

var mqtt = require('mqtt');

function createStream(opts) {
  opts.topic = opts.topic || 'bunyan';
  opts.addLevel = !!opts.addLevel;
  return Object.create(opts || {}, {
    write:{
      value:write,
      enumerable:true,
      configurable:true,
      writable:true
    },
    mqtt:{
      value:opts.mqtt || mqtt.createClient(opts.port || 1883, opts.host || 'localhost', opts),
      enumerable:false,
      configurable:false,
      writable:false
    }
  });
}

function write(item) {
  /*jslint validthis:true */
  var topic = [ this.topic ];
  if (this.addLevel) topic.push(item.level || '100');
  this.mqtt.publish(topic.join('/'), JSON.stringify(item), this);
}
