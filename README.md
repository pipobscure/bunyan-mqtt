bunyan-mqtt
===========

A bunyan raw stream to publish to mqtt

## Install

    npm install bunyan-mqtt

## Use

    var BunyanMqtt = require('bunyan-mqtt');
    var bunyan = require('bunyan');
    var log = bunyan.createLogger({
      streams:[
        { level:'info', type:'raw', stream:bmqtt({ topic:'logging', port:1873, host:'localhost' }) }
      ]
    });
