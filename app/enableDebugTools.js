(function(document){
    "use strict";
    const electron = require('electron');
    const appWindow = electron.remote.getCurrentWindow();

    document.addEventListener("keydown", function (keyboardEvent){
        const KEY_F5 = 116;
        const KEY_F12 = 123;

        switch(keyboardEvent.keyCode) {
            case KEY_F5: {
                location.reload();
                break;
            }
            case KEY_F12: {
                appWindow.openDevTools();
                break;
            }
            default: break;
        }
    });
})(document);