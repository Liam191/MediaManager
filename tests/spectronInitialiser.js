"use strict";
const path = require('path');
const electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron' + (process.platform === 'win32' ? '.cmd' : ''));
const appPath = path.join(__dirname, '..', 'src', 'main.js');
const Application = require('electron').Application;

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');


module.exports = {
    init: init
};

function init(){
    // Set up Chai
    global.before(() => {
        chai.should();
        chai.use(chaiAsPromised);
    });

    // Create and return a new Electron application.
    return new Application({
        path: electronPath,
        args: [ appPath ],
        env:{

        },
        startTimeout: 20*1000,
        chromeDriverLogPath:'../chromedriver.log'
    });
}