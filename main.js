"use strict";
const prefs = require('./prefs');
const {
    app,
    BrowserWindow
} = require('electron');

app.on('ready', createWindow);
app.on('browser-window-created', disableMenu);

function createWindow(){
    const window = new BrowserWindow({
        width: prefs.window.width,
        height: prefs.window.height,
        title: 'Media Manager',
        webPreferences:{
            nodeIntegration: true
        }
    });

    window.loadFile('app/index/index.html');
}

function disableMenu(event, window){
    window.setMenu(null);
}