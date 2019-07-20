"use strict";
const prefs = require('./prefs');
const {
    app,
    BrowserWindow
} = require('electron');

app.on('ready', createWindow);
app.on('browser-window-created',function(event, window){
    // Disable default menu for all new browser instances.
    window.setMenu(null);
});

function createWindow(){
    const window = new BrowserWindow({
        width: prefs.window.width,
        height: prefs.window.height,
        title: 'Media Manager',
        frame: false,
        webPreferences:{
            nodeIntegration: true
        }
    });

    window.loadFile('app/index.html');
}
