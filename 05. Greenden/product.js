var sidenav = document.getElementById('sidenav');
var menuicon = document.getElementById('menu-icon');
var closenav = document.getElementById('close-nav');


menuicon.addEventListener('click', function() {
    sidenav.style.right = 0;
})

closenav.addEventListener('click', function() {
    sidenav.style.right = '-50%';
})



var productContainer = document.getElementById('product-container');
var search = document.getElementById('search');
var productList = productContainer.querySelectorAll('div');


search.addEventListener('keyup', function() {
    var enterValue = event.target.value.toUpperCase();

    for(var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector('p').textContent;

        if(productName.toUpperCase().indexOf(enterValue) < 0) {
            productList[count].style.display = 'none';
        }
        else {
            productList[count].style.display = 'block';
        }
    }
})