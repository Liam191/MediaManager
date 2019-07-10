"use strict";
const app = require('../spectronInitialiser').init();

describe('Creating a Genre', function(){

    beforeEach(function(){
        return app.start();
    });

    afterEach(function(){
        if (app && app.isRunning()) {
            return app.stop();
        }
    });

    // Open app
    it('should open the Genre page on startup', function(){
        return app.client.waitUntilWindowLoaded().getWindowCount().should.eventually.equal(1);
    });

    // Assert app initial GUI


    // Click add genre button


    // Enter genre details


    // Assert genre exists


    // Close app

});