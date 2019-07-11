"use strict";
const path = require('path');
const electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron' + (process.platform === 'win32' ? '.cmd' : ''));
const appPath = path.join(__dirname, '..', 'src');
const Application = require('spectron').Application;

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');


module.exports = {
    init: init
};

function init(){
    const app =  new Application({
        path: electronPath,
        args: [ appPath ],
        env:{

        },
        startTimeout: 20*1000,
        chromeDriverLogPath:'../chromedriver.log'
    });

    // Set up Chai before
    global.before(function(){
        chai.should();
        chai.use(chaiAsPromised);
        chaiAsPromised.transferPromiseness = app.transferPromiseness;
        return app.start();
    });
    
    // Set up Chai after
    global.after(function(){
        if (app && app.isRunning()) {
            return app.stop();
        }
    });
    
    // Create and return a new Electron application.
    return app;
}