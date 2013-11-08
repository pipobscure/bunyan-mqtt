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
