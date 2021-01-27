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

    /* функции построения inner html */

    
    let buildThisHtmlArry = [
        {
            tag: 'li',
            classArry: [ 'trainers__unit', '\"trainers__unit--\"+i', 'trainers-unit']
        },
        {

        }
    ]



    const htmlBuilder = function(htmObj) {

        let newElement = document.createElement(htmObj.tag);
        for (var k = 0; k < htmObj.classArry.length; k++) {
            newElement.classList.add(htmObj.classArry[k]);
        }
        return newElement;
    }


    /* список тренеров DataBase */ 
const trainersList = [
    {
        pictureUrl: 'img/trainer_',
        nameis: 'Анна Павлова',
        sport: 'Растяжка',
        mention: [ 'Может достать носом до локтя',
         'Чемпион по стоянию в мостике',
         'Опыт — 98 лет' ]
    },
    {
        pictureUrl: 'img/trainer_',
        nameis: 'Алексей Лавров',
        sport: 'Powerlift',
        mention: [ 'Certified level 80 paladin',
         'По вечерам подрабатывает домкратом в автосервисе',
         'Опыт — 4 года' ]
    },
    {
        pictureUrl: 'img/trainer_',
        nameis: 'Александр Пашков',
        sport: 'CrossFit',
        mention: [ 'Certified Level 3 Trainer',
         'Победитель чемпионата России по CrossFit',
         'Опыт — 6 лет' ]
    },
    {
        pictureUrl: 'img/trainer_',
        nameis: 'Мария Кетова',
        sport: 'Yoga',
        mention: [ 'Может встать в халасану за рулем',
         'Будущий чемпион Барановичей по йоге',
         'Опыт — 10 лет' ]
    },
    {
        pictureUrl: 'img/trainer_',
        nameis: 'Homer Simpson',
        sport: 'JavaScript',
        mention: [ 'Может кодить сайты на Коболе',
         'Помнит бумажные журналы Хакер',
         'Опыт JavaScript - 400 лет' ]
    },
    {
        pictureUrl: 'img/trainer_',
        nameis: 'Peter Griffin',
        sport: 'Competitive donut eating',
        mention: [ 'Может съесть донут каждую секунду',
         'Умеет попадать в невероятно глупые ситуации',
         'Опыт — 21 год' ]
    },
    {
        pictureUrl: 'img/trainer_',
        nameis: 'Marjorie Simpson',
        sport: 'Stars in the best cartoon ever',
        mention: [ 'Может дотянуться волосами до троллейбусных проводов',
         'Здесь мог бы быть другой пункт, но фантазия кончилась',
         'Опыт — 30 лет' ]
    },
    {
        pictureUrl: 'img/trainer_',
        nameis: 'Louis Griffin',
        sport: 'The squeakiest voice on TV',
        mention: ['Вряд-ли кодит на Бейсике','И вряд-ли кодит на Макромедиа Флэш', 'Опыт — 10^7 лет' ]
    }
]

const carouselList = document.querySelector('.slider__list');
let slideWidth = 300;

const createTrainerSlides = function(arryOfTrainers) {
    
    for (let i = 0; i < arryOfTrainers.length; i++) {

        let newTrainerCard = htmlBuilder(buildThisHtmlArry[0]);
        newTrainerCard.style.left = slideWidth*i + 'px';
        newTrainerCard.style.backgroundImage = 'url(' + arryOfTrainers[i].pictureUrl + (i+1) + '.webp)';
        carouselList.appendChild(newTrainerCard);

        let trainersOverlay = document.createElement('div');
        trainersOverlay.classList.add('trainers-unit__overlay');
        trainersOverlay.classList.add('trainers-unit__overlay--' + i);
        trainersOverlay.classList.add('trainers-description');
        
        newTrainerCard.appendChild(trainersOverlay);

        let trainersName = document.createElement('h4');
        trainersName.classList.add('trainers-description__name');
        trainersName.textContent = arryOfTrainers[i].nameis;

        trainersOverlay.appendChild(trainersName);

        let trainersSport = document.createElement('span');
        trainersSport.classList.add('trainers-description__sport');
        trainersSport.textContent = arryOfTrainers[i].sport;

        trainersOverlay.appendChild(trainersSport);

        let trainersMentionList = document.createElement('ul');
        trainersMentionList.classList.add('trainers-description__list');
        trainersMentionList.classList.add('description-list');

            for (var j = 0; j < 3; j++) {
                let trainerMentionPiece = document.createElement('li');
                trainerMentionPiece.classList.add('description-list__piece');
                trainerMentionPiece.classList.add('description-list__piece' + j);
                trainerMentionPiece.textContent = arryOfTrainers[i].mention[j];
                trainersMentionList.appendChild(trainerMentionPiece);
            }

        trainersOverlay.appendChild(trainersMentionList);

    }
}

 createTrainerSlides(trainersList);

console.log(carouselList);














        /* слайдер */

let currentSlide = 0;

const moveToSlide = function(length, direction) {  /* set - for left and  ' ' for right */
    if (direction) {
        currentSlide++;
    } else {
        currentSlide--;
    }
    length = length*currentSlide;
    carouselList.style.transform = 'translateX(-' + length + 'px)';

}




const buttonLeft = document.querySelector('.arrow__button--left');
const buttonRight = document.querySelector('.arrow__button--right');

const showHideButtons = function() {
    if (currentSlide === 0) {
        buttonLeft.classList.add('arrow__button--invisible');
    } else if(currentSlide === 4) {
        buttonRight.classList.add('arrow__button--invisible');
    } else {
        buttonRight.classList.remove('arrow__button--invisible');
        buttonLeft.classList.remove('arrow__button--invisible');
    }
}

buttonLeft.addEventListener('click', function() {
    moveToSlide(slideWidth, false);
    showHideButtons();
})


buttonRight.addEventListener('click', function() {
    moveToSlide(slideWidth, true);
    showHideButtons();
})


// логика раздела отзывы

const buttonLeftFeedback = document.querySelector('#feedback-btn-left');
const buttonRightFeedback = document.querySelector('#feedback-btn-right');
const carouselListFeedback = document.querySelector('#feedback-slider');
let currentFeedback = 0;
const slideWidthFeedback = 560;

const showHideButtonsFeedback = function() {
    if (currentFeedback === 0) {
        buttonLeftFeedback.classList.add('arrow__button--invisible');
    } else if(currentFeedback === 2) {
        buttonRightFeedback.classList.add('arrow__button--invisible');
    } else {
        buttonRightFeedback.classList.remove('arrow__button--invisible');
        buttonLeftFeedback.classList.remove('arrow__button--invisible');
    }
}

const moveToFeedback = function(length, direction) {  /* set - for left and  ' ' for right */
    if (direction) {
        currentFeedback++;
    } else {
        currentFeedback--;
    }
    length = length*currentFeedback;
    carouselListFeedback.style.transform = 'translateX(-' + length + 'px)';

}



buttonLeftFeedback.addEventListener('click', function() {
    moveToFeedback(slideWidthFeedback, false);
    showHideButtonsFeedback();
})


buttonRightFeedback.addEventListener('click', function() {
    moveToFeedback(slideWidthFeedback,true);
    showHideButtonsFeedback();
})