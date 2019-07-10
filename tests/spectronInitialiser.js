"use strict";
const path = require('path');
const electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron' + (process.platform === 'win32' ? '.cmd' : ''));
const appPath = path.join(__dirname, '..', 'src', 'main.js');
const Application = require('electron').Application;

module.exports = {
    init: init
};

function init(){
    return new Application({
        path: electronPath,
        args: [ appPath ],
        env:{

        },
        startTimeout: 20*1000,
        chromeDriverLogPath:'../chromedriver.log'
    });
}