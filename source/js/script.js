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


subscriptionDurationLinks.forEach(function(link) {
    link.addEventListener('click', function(evt) {
        evt.preventDefault();
        inx = link.dataset.number;
        for (var i = 0; i < subscriptionDurationLinks.length; i++) {
            subscriptionDurationLinks[i].classList.remove('d-list__link_active');
        }
        link.classList.add('d-list__link_active');
        if (link === subscriptionDurationLinks[0]) {
            subscriptionTrainerBoxType.textContent = '12 занятий';
        } else {
            subscriptionTrainerBoxType.textContent = '12 занятий/м';
        }
         for (var j = 0; j < 3; j++) {
            priceBackground[j].textContent = pricesOneMonth[j] * priceCoeficient[inx];
            priceForeground[j].textContent = (pricesOneMonth[j] * priceCoeficient[inx]) + '  ₽';
         }
    })
})


/* логика раздела тренеры */
const trainersList = [
    {
        pictureUrl: '../img/trainer_.webp',
        nameis: 'Анна Павлова',
        sport: 'Растяжка',
        mention1: 'Может достать носом до локтя',
        mention2: 'Чемпион по стоянию в мостике',
        mention3: 'Опыт — 98 лет'
    },
    {
        pictureUrl: '../img/trainer_.webp',
        nameis: 'Алексей Лавров',
        sport: 'Powerlift',
        mention1: 'Certified level 80 paladin',
        mention2: 'По вечерам подрабатывает домкратом в автосервисе',
        mention3: 'Опыт — 4 года'
    },
    {
        pictureUrl: '../img/trainer_.webp',
        nameis: 'Александр Пашков',
        sport: 'CrossFit',
        mention1: 'Certified Level 3 Trainer',
        mention2: 'Победитель чемпионата России по CrossFit',
        mention3: 'Опыт — 6 лет'
    },
    {
        pictureUrl: '../img/trainer_.webp',
        nameis: 'Мария Кетова',
        sport: 'Yoga',
        mention1: 'Может встать в халасану за рулем',
        mention2: 'Будущий чемпион Барановичей по йоге',
        mention3: 'Опыт — 10 лет'
    },
    {
        pictureUrl: '../img/trainer_.webp',
        nameis: 'Homer Simpson',
        sport: 'JavaScript',
        mention1: 'Может кодить сайты на Коболе',
        mention2: 'Помнит бумажные журналы Хакер',
        mention3: 'Опыт JavaScript - 400 лет'
    },
    {
        pictureUrl: '../img/trainer_.webp',
        nameis: 'Peter Griffin',
        sport: 'Competitive donut eating',
        mention1: 'Может съесть донут каждую секунду',
        mention2: 'Умеет попадать в невероятно глупые ситуации',
        mention3: 'Опыт — 21 год'
    },
    {
        pictureUrl: '../img/trainer_.webp',
        nameis: 'Marjorie Simpson',
        sport: 'Stars in the best cartoon ever',
        mention1: 'Может дотянуться волосами до троллейбусных проводов',
        mention2: 'Здесь мог бы быть другой пункт, но фантазия кончилась',
        mention3: 'Опыт — 30 лет'
    },
    {
        pictureUrl: '../img/trainer_.webp',
        nameis: 'Louis Griffin',
        sport: 'The squeakiest voice on TV',
        mention1: 'Вряд-ли кодит на Бейсике',
        mention2: 'И вряд-ли кодит на Макромедиа Флэш',
        mention3: 'Опыт — 10^7 лет'
    }
]




