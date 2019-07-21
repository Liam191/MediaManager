const CategoryRepository = function(){
    "use strict";

    const idb = window.indexedDB;

    return {};

    function init(){
        let request = idb.open('MediaDatabase', 1);

        request.onerror = function(event){

        };

        request.onsuccess = function(event){

        };
    }
}();