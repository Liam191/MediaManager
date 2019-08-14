const CategoryRepository = function(){
    "use strict";

    const request = window.indexedDB.open('MediaManagerDB', 1);
    console.log('request: ', request);

    request.onerror = function(event){
        console.log('ERROR opening database connection', event.target);
    };

    request.onsuccess = function(event){
        console.log('success', event.target.result, request.result);
    };

    request.onupgradeneeded = function(e){
        let db = request.result;
        let store = db.createObjectStore();
    };
}();