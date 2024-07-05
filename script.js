function showCategory(category) {
    var categories = document.getElementsByClassName('menu-category');
    for (var i = 0; i < categories.length; i++) {
        categories[i].classList.remove('active');
    }
    document.getElementById(category).classList.add('active');
}
