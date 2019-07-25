const CategoryRepository = function(){
    "use strict";
    const _this = this;
    const idb = window.indexedDB;
    init();

    return {};

    function init(){
        let request = idb.open('MediaDatabase', 1);

        request.onerror = function(event){
            console.log('DB connection error!', event, request);
            _this.onError(new Error('Unable to open database!'), event, request.errorCode);
        };

        request.onsuccess = function(event){
            console.log('DB connection opened', event, request);
        };
    }
}();