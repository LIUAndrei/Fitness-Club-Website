/* ниже описаны процессы на основной странице */

/* логика раздела тренажерный зал*/

var videoThumbButton = document.querySelector('.video__link');

videoThumbButton.addEventListener('click', function(evt) {
    evt.preventDefault();
})


/* логика раздела абонементы */

var subscriptionDurationLinks = Array.from(document.querySelectorAll('.d-list__link'));
var subscriptionTrainerBoxType = document.querySelector('.scription-list__trainer .item-features__type');
var priceBackground = Array.from(document.querySelectorAll('.item-features__price-background'));
var priceForeground = Array.from(document.querySelectorAll('.item-features__price'));
var pricesOneMonth = [5000, 1700, 2700];
var priceCoeficient = [1, 0.8, 0.6];


subscriptionDurationLinks.forEach(function(link, i) {
    link.addEventListener('click', function(evt) {
        evt.preventDefault();
        console.log(i);
        for (var i = 0; i < subscriptionDurationLinks.length; i++) {
            subscriptionDurationLinks[i].classList.remove('d-list__link_active');
        }
        link.classList.add('d-list__link_active');
        if (link === subscriptionDurationLinks[0]) {
            subscriptionTrainerBoxType.textContent = '12 занятий';
        } else {
            subscriptionTrainerBoxType.textContent = '12 занятий/м';
        }
        // for (var j = 0; j < 3; j++) {
        //    priceBackground[j].textContent = 
        // }
    })
})