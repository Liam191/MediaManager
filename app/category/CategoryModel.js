const CategoryModel = function(require, CategoryRepository){
    "use strict";
    const domPurify = require('dompurify');

    const categoryList = new ObservableCategoryList(CategoryRepository.getCategories());

    function ObservableCategoryList(array){
        const _this = this;

        // Create a copy of the original array
        const categories = array.slice(0);

    }
}(require, CategoryRepository);