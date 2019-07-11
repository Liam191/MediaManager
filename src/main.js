"use strict";
const prefs = require('./prefs');
const {
    app,
    BrowserWindow
} = require('electron');

app.on('ready', createWindow);

function createWindow(){
    const window = new BrowserWindow({
        width: prefs.window.width,
        height: prefs.window.height,
        title: 'Media Manager',
        webPreferences:{
            nodeIntegration: true
        }
    });

    window.loadFile('app/index.html');
}
