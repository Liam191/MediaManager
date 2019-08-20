(function(document, CategoryModel){
    "use strict";
    const container = document.getElementById('category-container');

    // Initialise categories
    let categories = CategoryModel.getCategoryList();

    categories.addListener('change', function(event){
        console.log('change', event);
    });

    document.getElementById('btn-add-category').onclick = function(event){
        console.log(event);
        categories.push({'test': 'New category!!'});
    };

    // Push changes to Categories to model

    // Add Categories to model

    // Listen for change to Categories from model

    // Navigate to Category view

})(document, CategoryModel);