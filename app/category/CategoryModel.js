const CategoryModel = function(require, CategoryRepository){
    "use strict";
    const domPurify = require('dompurify');

    const categoryList = new ObservableCategoryList(CategoryRepository.getCategories());

    return {
        getCategoryList
    };

    function getCategoryList(){
        return categoryList;
    }


    function ObservableCategoryList(array){
        const _this = this;

        const events = {
            CHANGE: 'change'
        };
        const handlers = initEventHandlers();

        // Create a copy of the original array
        const categories = array.slice(0);


        return {
            get,
            set,
            push,
            remove,
            addListener,
            removeListener,
        };


        function get(index){
            return categories[index];
        }

        function set(index, data){
            categories[index] = data;
            emitEvent(events.CHANGE, { index });
        }

        function push(data){
            // TODO: Track by category GUID
            categories.push(data);
            emitEvent(events.CHANGE, { index: categories.length - 1 });
        }

        function remove(data){
            // TODO: Track by category GUID
            categories.filter((element) => { return element === data; });
            emitEvent(events.CHANGE, { index: -1 });
        }

        function initEventHandlers(){
            const handlerObj = {};
            let currentEvent;
            let keys = Object.keys(events);
            for(let i = 0; i < keys.length; i++){
                currentEvent = events[keys[i]];
                handlerObj[currentEvent] = [];
            }
            return handlerObj;
        }

        function addListener(eventName, handler){
            if(Object.keys(handlers).includes(eventName)){
                // Add the given event handler to the event
                handlers[eventName].push(handler);
            } else {
                throw new Error('Event type "'+ eventName +'" does not exist');
            }
        }

        function removeListener(eventName, handler){
            if(Object.keys(handlers).includes(eventName)){
                // Remove the given event handler from the event
                handlers[eventName].filter((fn) => fn !== handler);
            } else {
                throw new Error('Event type "'+ eventName +'" does not exist');
            }
        }

        function emitEvent(eventName, event){
            let handlerArray = handlers[eventName];
            // Triggers all event handlers subscribed to the specified event
            for(let i = 0; i < handlerArray.length; i++){
                handlerArray[i](event);
            }
        }
    }
}(require, CategoryRepository);