"use strict";
const app = require('../spectronInitialiser').init();

describe('E2E - Creating a Genre', function(){
    // Because this is an End-to-End test, we do NOT need
    // to restart the app after each it() call.

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