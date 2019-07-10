"use strict";
const app = require('../spectronInitialiser').init();
const chaiAsPromised = require('chai-as-promised');

describe('Creating a Genre', function(){

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