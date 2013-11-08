bunyan-mqtt
===========

A bunyan raw stream to publish to mqtt

## Install

    npm install bunyan-mqtt

## Use

    var bunyan = require('bunyan');
    var bmqtt = require('bunyan-mqtt');

    var log = bunyan.createLogger({
      streams:[
        { level:'info', type:'raw', stream:bmqtt({ topic:'logging', port:1873, host:'localhost' }) }
      ]
    });

## Options

 * **host** - mandatory host to use as broker
 * **port** - the port to use on the broker
 * **topic** - the topic to use for publishing
 * **qos** - the numeric *qos* to use in mqtt
 * **retain** - whether the broker should retain messages
