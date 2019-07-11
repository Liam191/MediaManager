"use strict";
const app = require('../spectronInitialiser').init();

describe('E2E - Creating a Genre', function(){
    // Because this is an End-to-End test, we do NOT need
    // to restart the app after each it() call.

    it('should open the app window', function(){
        return app.client.waitUntilWindowLoaded()
            .getWindowCount().should.eventually.equal(1);
    });

    // Assert app initial GUI state
    it('should have a title of "Media Manager"', function(){
        return app.client.waitUntilWindowLoaded()
            .getTitle().should.eventually.equal('Media Manager');
    });

    // Click add genre button


    // Enter genre details


    // Assert genre exists


    // Close app

});