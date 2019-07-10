"use strict";
const app = require('../spectronInitialiser').init();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

describe('Creating a Genre', function(){
    beforeEach(function(){
        app.start();
    });

    afterEach(function(){
        app.stop();
    });

    // Open app
    it('should open the Genre page on startup', function(){
        app.client.waitUntilWindowLoaded().getWindowCount()
            .windowCount.should.eventually.equal(1);
    });

    // Assert app initial GUI


    // Click add genre button


    // Enter genre details


    // Assert genre exists


    // Close app

});