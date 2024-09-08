$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header-fixed').addClass("sticky");
    }
    else{
    $('.header-fixed').removeClass("sticky");
    }
});

// Всплывающее меню
document.addEventListener('DOMContentLoaded', function () {
    const villageIcon = document.querySelector('.dmenu__link_d');
    const serviceIcon = document.querySelector('.dropdown-icon-service');

    villageIcon.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.closest('.menu__list').querySelector('.menu__list-dropdown-villages');
        const isVisible = dropdownMenu.style.display === 'flex';
        document.querySelectorAll('.menu__list-dropdown-villages, .menu__list-dropdown-service').forEach(menu => {
            menu.style.display = 'none';
        });
        dropdownMenu.style.display = isVisible ? 'none' : 'flex';
    });

    serviceIcon.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.closest('.menu__list').querySelector('.menu__list-dropdown-service');
        const isVisible = dropdownMenu.style.display === 'flex';
        document.querySelectorAll('.menu__list-dropdown-villages, .menu__list-dropdown-service').forEach(menu => {
            menu.style.display = 'none';
        });
        dropdownMenu.style.display = isVisible ? 'none' : 'flex';
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.menu__list')) {
            document.querySelectorAll('.menu__list-dropdown-villages, .menu__list-dropdown-service').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});

//Всплывающее мобильное меню
document.addEventListener('DOMContentLoaded', function () {
    const villageIconMob = document.querySelector('.dropdown-icon-villages-mob');
    const serviceIconMob = document.querySelector('.dropdown-icon-service-mob');

    villageIconMob.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.closest('.menu-mobile__list-item').querySelector('.menu__list-dropdown-villages-mob');
        dropdownMenu.classList.toggle('hidden');
    });

    serviceIconMob.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.closest('.menu-mobile__list-item').querySelector('.menu__list-dropdown-service-mob');
        dropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.menu-mobile__list-item')) {
            document.querySelectorAll('.menu__list-dropdown-villages-mob, .menu__list-dropdown-service-mob').forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
        }
    });
});

// Окно избранное
document.querySelector('.social-like').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('popup-close').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});


// Окно мобильное меню Гамбургер
document.querySelector('.menu__btn').addEventListener('click', function () {
    document.getElementById('popup-menu').style.display = 'flex';
});

document.getElementById('popup-close-menu').addEventListener('click', function () {
    document.getElementById('popup-menu').style.display = 'none';
});

// Слайдер в шапке
const swiperTop = new Swiper('.top__swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
});

//Слайдер в шапке мобильный
const swiperTopMobile = new Swiper('.top-mobile__swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
});

// Слайдер Преимущества мобильный
const swiperTopMob = new Swiper('.top__swiper-mob', {
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
});

//Слайдер Поселки
var swiperVillages = new Swiper(".slider-villages", {
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//Слайдер Построенные коттеджи
var swiperBuiltCottages = new Swiper(".slider-built-cottages", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    touchRatio: 0,
    simulateTouch: false,
});

// Слайдер карточка в Построенные коттеджи
var swiperBuiltCottagesMini = new Swiper(".slider-built-cottage__mini", {
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//Слайдер Проекты домов
var swiperProjectsHomes = new Swiper(".slider-projects-home", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    touchRatio: 0,
    simulateTouch: false,
});

// Слайдер карточка в Проекты домов
var swiperProjectsHomesMini = new Swiper(".slider-projects-home__mini", {
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next', // кнопка для перехода к следующему слайду
        prevEl: '.swiper-button-prev', // кнопка для перехода к предыдущему слайду
    },
    touchEventsTarget: 'container', // делает возможным свайп по всему контейнеру
    simulateTouch: true,  // позволяет управлять слайдами свайпами
    touchRatio: 1, // чувствительность свайпа (1 по умолчанию)
});

//Слайд Видео обзоры
var swiperReviews = new Swiper(".slider-reviews", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: '.reviews-video .swiper-button-next.reviews-next',
        prevEl: '.reviews-video .swiper-button-prev.reviews-prev',
    },
});

// Слайд партнеры
const swiperBid = new Swiper('.bid__slider', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    
});

// Слайд отзывы
const swiperReviewsResidents = new Swiper(".slider-reviews-residents", {
    slidesPerView: 'auto',
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.reviews-residents .swiper-button-next.reviews-next',
        prevEl: '.reviews-residents .swiper-button-prev.reviews-prev',
    },

    breakpoints: {

        320:{
        
            slidesPerView:1.2,
            loop: true,
        },

        375:{
        
            slidesPerView:1.2,
            loop: true,
        },

       390:{
        
            slidesPerView:1.2,
            loop: true,
        },

        415:{
        
            slidesPerView:1.2,
            loop: true,
        },
        450:{
        
            slidesPerView:1.2,
            loop: true,
        },

        700:{
            slidesPerView: 2,
            loop: true,
       
        },

        768:{
            slidesPerView: 2,
            loop: true,
       
        },

        992:{
            slidesPerView: 2,
            loop: true,
       
        },

        1020:{
          slidesPerView: 2,
          loop: true,
     
        },

        1500:{
            slidesPerView: 3,
            loop: true,
       
          }
      },
    
});

//Карта
let center = [55.5671253801259, 37.73439638473503];
let zhkbukovayaalleya = [55.88025303025825, 38.292098999999986];
let zhkvoskresenskoe = [55.53414050447952, 37.449847999999996];
let kprodinki = [55.82502951488325, 38.10440949999989];

function init() {
    let map = new ymaps.Map('map-t', {
        center: center,
        zoom: 9,
        type: 'yandex#hybrid'
    });

    let balloonContentLayout = ymaps.templateLayoutFactory.createClass(
        document.getElementById('balloon-content').innerHTML, {
        build: function () {
            balloonContentLayout.superclass.build.call(this);
            new Swiper('.slider-villages', {
                spaceBetween: 5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    });

    let placemarkOptions = {
        iconLayout: 'default#image',
        iconImageHref: 'images/icon-houses.svg',
        iconImageSize: [22, 22],
        iconImageOffset: [-10, -10],
        balloonContentLayout: balloonContentLayout,
        balloonPanelMaxMapArea: 0,
        balloonOffset: [100, 0]
    };

    let placemark1 = new ymaps.Placemark(zhkbukovayaalleya, {}, placemarkOptions);
    let placemark2 = new ymaps.Placemark(zhkvoskresenskoe, {}, placemarkOptions);
    let placemark3 = new ymaps.Placemark(kprodinki, {}, placemarkOptions);

    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.controls.remove('typeSelector');

    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
}

ymaps.ready(init);

//Слайд Последние новости
const swiperLatestNews = new Swiper(".slider-latest-news", {
    slidesPerView: 'auto',
    slidesPerView: 3,
    
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: '.latest-news .swiper-button-next.reviews-next',
        prevEl: '.latest-news .swiper-button-prev.reviews-prev',
    },

    breakpoints: {

        320:{
        
            slidesPerView:1.2,
            loop: true,
        },

        375:{
        
            slidesPerView:1.2,
            loop: true,
        },

       390:{
        
            slidesPerView:1.2,
            loop: true,
        },

        415:{
        
            slidesPerView:1.2,
            loop: true,
        },
        450:{
        
            slidesPerView:1.2,
            loop: true,
        },

        700:{
            slidesPerView: 2,
            loop: true,
       
        },

        768:{
            slidesPerView: 2,
            loop: true,
       
        },

        992:{
            slidesPerView: 2,
            loop: true,
       
        },

        1020:{
          slidesPerView: 2,
          loop: true,
     
        },

        1500:{
            slidesPerView: 3,
            loop: true,
       
          }
      },
});


//Переход на секцию
/* document.querySelector('.header-down').addEventListener('click', function () {
    document.getElementById('villages').scrollIntoView({ behavior: 'smooth' });
}); */

function initializeScrollToSection() {
    document.addEventListener('DOMContentLoaded', function() {
        const scrollButton = document.querySelector('.header-down');
        const targetSection = document.getElementById('villages');

        // Проверка на наличие элементов перед добавлением обработчика
        if (scrollButton && targetSection) {
            scrollButton.addEventListener('click', function () {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
}

// Вызов функции для инициализации
initializeScrollToSection();

/* Страница посёлка - VIDEO */

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById("myVideo");

    function togglePlay() {
        if (video.paused) {
            video.play();
            document.querySelector('.play-button').style.display = 'none'; // Прячем кнопку
        } else {
            video.pause();
            document.querySelector('.play-button').style.display = 'flex'; // Показываем кнопку
        }
    }
});

/* Страница посёлка - Фотогалерея  */

function initializeGallery() {
    document.addEventListener('DOMContentLoaded', function() {
        const galleryCards = document.querySelectorAll('.gallery__content-card');

        galleryCards.forEach((card) => {
            const images = card.querySelectorAll('.gallery__card-image');
            const radioButtons = card.querySelectorAll('.gallery__content__custom-radio input');
            const prevBtn = card.querySelector('.gallery__prev-btn');
            const nextBtn = card.querySelector('.gallery__next-btn');

            let currentIndex = 0;
            let startX = 0;
            let endX = 0;

            function updateGallery(index) {
                images.forEach((img, imgIndex) => {
                    img.classList.toggle('active', imgIndex === index);
                });
                radioButtons.forEach((radio, radioIndex) => {
                    radio.checked = (radioIndex === index);
                });
                currentIndex = index;
            }

            function handleRadioChange(e) {
                const index = parseInt(e.target.dataset.index, 10);
                updateGallery(index);
            }

            function handlePrevClick() {
                const newIndex = (currentIndex - 1 + images.length) % images.length;
                updateGallery(newIndex);
            }

            function handleNextClick() {
                const newIndex = (currentIndex + 1) % images.length;
                updateGallery(newIndex);
            }

            function handleTouchStart(e) {
                startX = e.touches[0].clientX;  // Запоминаем начальную точку касания
            }

            function handleTouchMove(e) {
                endX = e.touches[0].clientX;  // Запоминаем текущее положение пальца
            }

            function handleTouchEnd() {
                if (startX > endX + 50) {  // Свайп влево
                    handleNextClick();
                } else if (startX < endX - 50) {  // Свайп вправо
                    handlePrevClick();
                }
            }

            radioButtons.forEach(radio => {
                radio.addEventListener('change', handleRadioChange);
            });

            if (prevBtn) {
                prevBtn.addEventListener('click', handlePrevClick);
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', handleNextClick);
            }

            // Добавляем обработчики для свайпов
            card.addEventListener('touchstart', handleTouchStart);
            card.addEventListener('touchmove', handleTouchMove);
            card.addEventListener('touchend', handleTouchEnd);

            // Инициализация галереи
            updateGallery(0);
        });
    });
}

// Вызов функции для инициализации галереи
initializeGallery();


/* Страница посёлка - смена фотографий в header */

function initializeImageSlider() {
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.page__header-images__img');
        const progressBars = document.querySelectorAll('.progress-bar .progress');
        
        // Проверяем наличие изображений и прогресс-баров на странице
        if (images.length === 0 || progressBars.length === 0) {
            return; // Прекращаем выполнение, если нет изображений или прогресс-баров
        }

        let currentIndex = 0;
        const slideInterval = 5000; // Время на каждое изображение в мс (5 секунд)
        let intervalId;

        // Показ следующего изображения
        function showNextImage() {
            // Убираем активный класс с текущего изображения и сбрасываем прогресс для всех баров
            images[currentIndex].classList.remove('active');
            resetProgressBars();

            // Переход к следующему изображению
            currentIndex = (currentIndex + 1) % images.length;

            // Показ следующего изображения и запуск прогресс-бара
            images[currentIndex].classList.add('active');
            updateProgressBar(currentIndex);
        }

        // Сброс прогресс-баров
        function resetProgressBars() {
            progressBars.forEach(bar => {
                bar.classList.remove('active');
                bar.style.width = '0'; // Сбросить прогресс
            });
        }

        // Обновление прогресс-бара для текущего изображения
        function updateProgressBar(index) {
            setTimeout(() => {
                progressBars[index].classList.add('active');
                progressBars[index].style.width = '100%'; // Прогресс до 100% за slideInterval
            }, 50); // Задержка для корректной анимации
        }

        // Запуск слайдера
        function startSlider() {
            updateProgressBar(currentIndex); // Запустить первый прогресс-бар
            intervalId = setInterval(showNextImage, slideInterval);
        }

        startSlider();
    });
}

// Вызов функции для инициализации слайдера
initializeImageSlider();



/* Страница посёлка - COTTAGES */

function initializeCottagesSwitcher() {
    document.addEventListener('DOMContentLoaded', () => {
        // Получаем ссылки на кнопки и блоки
        const button1 = document.getElementById('cottages-btn1');
        const button2 = document.getElementById('cottages-btn2');
        const block1 = document.getElementById('cattages-block1');
        const block2 = document.getElementById('cattages-block2');

        // Универсальная функция для переключения блоков
        function toggleBlocks(activeButton, inactiveButton, activeBlock, inactiveBlock) {
            activeBlock.classList.add('active');
            activeButton.classList.add('active');
            inactiveBlock.classList.remove('active');
            inactiveButton.classList.remove('active');
        }

        // Обработчики для кнопок
        if (button1 && block1 && button2 && block2) {
            button1.addEventListener('click', () => {
                toggleBlocks(button1, button2, block1, block2);
            });

            button2.addEventListener('click', () => {
                toggleBlocks(button2, button1, block2, block1);
            });
        }
    });
}

// Вызов функции для инициализации переключения блоков
initializeCottagesSwitcher();

document.querySelectorAll('.infrastructure__content-item__btn').forEach(button => {
    button.addEventListener('click', function() {
        const groupClass = button.getAttribute('data-group');
        const containers = document.querySelectorAll(`.infrastructure__content-icons__icon.${groupClass}`);
        
        containers.forEach(container => {
            const images = container.querySelectorAll('svg');
            
            // Toggle active class between first and second image
            if (images.length > 1) {
                if (images[0].classList.contains('active')) {
                    images[0].classList.remove('active');
                    images[1].classList.add('active');
                } else {
                    images[1].classList.remove('active');
                    images[0].classList.add('active');
                }
            }
        });
        
        // Remove active class from all buttons
        document.querySelectorAll('.infrastructure__content-item__btn').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the clicked button
        button.classList.add('active');
    });
});

/* Переключение изоброжения */

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация всех блоков слайдера
    const sliders = document.querySelectorAll('.cottages__images-img');

    sliders.forEach((slider, sliderIndex) => {
        const images = slider.querySelectorAll('.cottages__slider-image');
        const radios = slider.querySelectorAll('input[type="radio"]');
        let currentIndex = 0;
        let startX = 0;
        let isSwiping = false;

        // Присвоение уникальных имен радиокнопкам для каждого блока
        radios.forEach((radio, index) => {
            radio.setAttribute('name', `cottages-radio-${sliderIndex}`);
        });

        // Функция обновления изображения
        const updateImage = (index) => {
            images.forEach(img => img.classList.remove('active'));
            radios.forEach(radio => radio.checked = false);

            images[index].classList.add('active');
            radios[index].checked = true;
            currentIndex = index;
        };

        // Обработка нажатия на радиокнопки
        radios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                updateImage(index);
            });
        });

        // Обработка свайпа
        const handleSwipe = (direction) => {
            if (direction === 'left') {
                currentIndex = (currentIndex + 1) % images.length;
            } else if (direction === 'right') {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }
            updateImage(currentIndex);
        };

        // Начало свайпа
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isSwiping = true;
        });

        // Завершение свайпа
        slider.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;

            const moveX = e.touches[0].clientX;
            const diffX = moveX - startX;

            if (Math.abs(diffX) > 50) {
                handleSwipe(diffX > 0 ? 'right' : 'left');
                isSwiping = false;
            }
        });

        // Сброс состояния после завершения касания
        slider.addEventListener('touchend', () => {
            isSwiping = false;
        });
    });
});


/* Переключение изображений в поле план */

document.addEventListener('DOMContentLoaded', function () {
    // Переключение по радио-кнопкам
    const cards = document.querySelectorAll('.plan__content-card');

    cards.forEach((card) => {
        const images = card.querySelectorAll('.plan__content-card__image');
        const radioButtons = card.querySelectorAll('.plan__radio-buttons input');

        // Устанавливаем обработчики событий для радио-кнопок
        radioButtons.forEach((radioButton, index) => {
            radioButton.addEventListener('click', function () {
                images.forEach(img => img.classList.remove('active'));
                images[index].classList.add('active');
            });
        });

        // Логика для свайпов
        let startX = 0;
        let currentIndex = 0;

        card.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
        });

        card.addEventListener('touchend', function (e) {
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;

            if (Math.abs(diffX) > 50) {
                // Определяем направление свайпа
                if (diffX > 0) {
                    // Свайп влево, показываем следующее изображение
                    currentIndex = (currentIndex + 1) % images.length;
                } else {
                    // Свайп вправо, показываем предыдущее изображение
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                }

                // Обновляем активное изображение и радио-кнопку
                images.forEach(img => img.classList.remove('active'));
                images[currentIndex].classList.add('active');

                radioButtons[currentIndex].checked = true;
            }
        });
    });
});

/* Активация карточек в блоке план */

document.addEventListener('DOMContentLoaded', function () {
    // Находим все кружочки
    const circles = document.querySelectorAll('.plan__circle');
    // Находим элемент с классом masterPlan__container
    const masterPlanContainer = document.querySelector('.masterPlan__container');
    
    // Функция для скрытия всех блоков и удаления класса active у всех кружочков
    function resetActive() {
        const blocks = document.querySelectorAll('.plan__content-card');
        blocks.forEach(block => block.classList.remove('active')); // Убираем класс active у всех блоков

        circles.forEach(circle => circle.classList.remove('active')); // Удаляем класс active у всех кружочков

        // Удаляем класс active у masterPlan__container
        if (masterPlanContainer) {
            masterPlanContainer.classList.remove('active');
        }
    }

    // Добавляем обработчик клика для каждого кружочка
    circles.forEach(circle => {
        circle.addEventListener('click', function () {
            const number = circle.getAttribute('data-number'); // Получаем номер кружочка
            resetActive(); // Скрываем все блоки и убираем активный класс у всех кружочков

            const block = document.querySelector(`#block-${number}`); // Находим соответствующий блок
            block.classList.add('active'); // Показываем его

            circle.classList.add('active'); // Добавляем активный класс к текущему кружочку

            // Добавляем класс active к masterPlan__container
            if (masterPlanContainer) {
                masterPlanContainer.classList.add('active');
            }
        });
    });
});

/* Каталог домов */

/* Этапы строительства - desctop */

function initializeSlider() {
    document.addEventListener('DOMContentLoaded', function() {
        const sliderContainer = document.querySelector('.stages__slaider-container-desctop');

        if (!sliderContainer) return; // Проверка на наличие контейнера

        // Убираем стандартное плавное поведение
        sliderContainer.style.scrollBehavior = 'auto';

        let startX;                  // Начальная позиция касания
        let scrollLeftStart;          // Начальное смещение прокрутки
        let isTouching = false;       // Флаг для отслеживания касания
        let wheelDelta = 0;           // Дельта для инерции при прокрутке колесом
        let raf;                      // Переменная для анимации
        const friction = 0.8;         // Коэффициент трения для плавного замедления инерции (меньше для слабее инерции)

        // Обработка начала касания
        function handleTouchStart(e) {
            cancelAnimationFrame(raf); // Останавливаем инерцию при новом касании
            startX = e.touches[0].pageX;
            scrollLeftStart = sliderContainer.scrollLeft;
            isTouching = true;         // Устанавливаем флаг касания
        }

        // Обработка движения пальца
        function handleTouchMove(e) {
            if (!isTouching) return;
            const touchX = e.touches[0].pageX;
            const deltaX = touchX - startX;
            sliderContainer.scrollLeft = scrollLeftStart - deltaX;  // Прокручиваем контейнер без инерции
        }

        // Обработка завершения касания
        function handleTouchEnd() {
            isTouching = false; // Сбрасываем флаг касания, но не запускаем инерцию
        }

        // Плавная прокрутка при колесе мыши с уменьшенной инерцией
        function applyWheelInertia() {
            if (Math.abs(wheelDelta) > 0.5) { // Меньший порог для завершения инерции
                sliderContainer.scrollLeft -= wheelDelta;  // Прокручиваем с учётом дельты
                wheelDelta *= friction;  // Постепенное замедление колеса
                raf = requestAnimationFrame(applyWheelInertia);  // Анимация продолжается
            } else {
                cancelAnimationFrame(raf);  // Останавливаем анимацию, если скорость мала
                raf = null;
            }
        }

        // Обработка события прокрутки колесом мыши
        function handleWheelScroll(e) {
            e.preventDefault();
            // Накапливаем дельту, на сколько прокрутить
            wheelDelta += e.deltaY !== 0 ? e.deltaY : e.deltaX;

            // Запускаем инерционную прокрутку через requestAnimationFrame
            if (!raf) {
                applyWheelInertia();
            }
        }

        // Добавление обработчиков событий
        sliderContainer.addEventListener('wheel', handleWheelScroll);
        sliderContainer.addEventListener('touchstart', handleTouchStart);
        sliderContainer.addEventListener('touchmove', handleTouchMove);
        sliderContainer.addEventListener('touchend', handleTouchEnd);
    });
}

// Вызов функции для инициализации слайдера
initializeSlider();

/* Вычисление отступа */

function initializeMarginSync() {
    document.addEventListener("DOMContentLoaded", function() {
        // Получаем элементы блоков
        const block1 = document.querySelector('.container');
        const block2 = document.querySelector('.stages__slide1');

        // Проверка на наличие блоков
        if (!block1 || !block2) return;

        // Функция для синхронизации margin-left у второго блока с добавлением 10px
        function syncMargins() {
            const block1MarginLeft = window.getComputedStyle(block1).marginLeft;
            const marginValue = parseInt(block1MarginLeft) + 10; // Добавляем 10px
            block2.style.marginLeft = `${marginValue}px`; // Применяем margin-left
        }

        // Первоначальная установка отступа
        syncMargins();

        // Отслеживаем изменения стилей с помощью MutationObserver
        const observer = new MutationObserver(syncMargins);

        // Настраиваем observer на изменение атрибутов стилей
        observer.observe(block1, {
            attributes: true, // Наблюдать за изменением атрибутов
            attributeFilter: ['style'], // Следить только за изменениями стилей
        });

        // Опционально: динамически отслеживать изменения через setInterval (на случай inline-стилей)
        const syncInterval = setInterval(syncMargins, 100); // Проверять каждые 100 мс

        // Очистка observer и setInterval при выгрузке страницы
        window.addEventListener('unload', () => {
            observer.disconnect();
            clearInterval(syncInterval);
        });
    });
}

// Вызов функции для синхронизации отступов
initializeMarginSync();

/* Этапы строительства - mobile */

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.stages__slider-mobile');
    const slides = document.querySelectorAll('.stages__slide-mobile');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let currentTranslateX = 0;
    let isSwiping = false;

    // Обновляем ширину слайдов в зависимости от экрана
    function updateSliderPosition() {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`; // используем vw для адаптивности
    }

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
      isSwiping = true;
      currentTranslateX = -currentIndex * window.innerWidth;
      sliderWrapper.style.transition = 'none'; // отключаем плавность во время свайпа
    }

    function handleTouchMove(event) {
      if (!isSwiping) return;

      event.preventDefault();
      const touchX = event.touches[0].clientX;
      const deltaX = touchX - startX;

      // Перемещаем слайдер по оси X в зависимости от движения пальца
      const translateX = currentTranslateX + deltaX;
      sliderWrapper.style.transform = `translateX(${translateX}px)`;
    }

    function handleTouchEnd(event) {
      const endX = event.changedTouches[0].clientX;
      const deltaX = startX - endX;

      // Если свайп был более чем на 50px, то листаем
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex < totalSlides - 1) {
          currentIndex++;
        } else if (deltaX < 0 && currentIndex > 0) {
          currentIndex--;
        }
      }

      // Возвращаем слайдер на границу слайда с плавностью
      sliderWrapper.style.transition = 'transform 0.3s ease-in-out'; // добавляем плавность после завершения свайпа
      updateSliderPosition();
      isSwiping = false;
    }

    // Добавляем обработчики событий для свайпа
    sliderWrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    sliderWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    sliderWrapper.addEventListener('touchend', handleTouchEnd);

    // Обновляем позицию слайдера при изменении размера окна
    window.addEventListener('resize', updateSliderPosition);
});

/* Идеально для жизни и отдыха вдали от города */

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.pros-bloсks');
    const slides = document.querySelectorAll('.pros-bloсks__block');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let currentTranslateX = 0;
    let isSwiping = false;

    // Задаём отступ между карточками (16px)
    const gap = 16; // Ширина отступа

    // Получаем текущую ширину одного слайда, включая отступ
    function getCurrentSlideWidth() {
        return slides[0].offsetWidth + gap;  // ширина слайда + отступ
    }

    // Обновляем положение слайдера
    function updateSliderPosition() {
        const slideWidth = getCurrentSlideWidth();
        sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // используем фактическую ширину слайда с учётом отступа
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        isSwiping = true;
        currentTranslateX = -currentIndex * getCurrentSlideWidth();
        sliderWrapper.style.transition = 'none'; // отключаем плавность во время свайпа
    }

    function handleTouchMove(event) {
        if (!isSwiping) return;

        event.preventDefault();
        const touchX = event.touches[0].clientX;
        const deltaX = touchX - startX;

        // Перемещаем слайдер по оси X в зависимости от движения пальца
        const translateX = currentTranslateX + deltaX;
        sliderWrapper.style.transform = `translateX(${translateX}px)`;
    }

    function handleTouchEnd(event) {
        const endX = event.changedTouches[0].clientX;
        const deltaX = startX - endX;
        const slideWidth = getCurrentSlideWidth(); // Получаем актуальную ширину слайда с отступом

        // Если свайп был более чем на 50px, то листаем
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0 && currentIndex < totalSlides - 1) {
                currentIndex++;
            } else if (deltaX < 0 && currentIndex > 0) {
                currentIndex--;
            }
        }

        // Возвращаем слайдер на границу слайда с плавностью
        sliderWrapper.style.transition = 'transform 0.3s ease-in-out'; // добавляем плавность после завершения свайпа
        updateSliderPosition();
        isSwiping = false;
    }

    // Добавляем обработчики событий для свайпа
    sliderWrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    sliderWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    sliderWrapper.addEventListener('touchend', handleTouchEnd);

    // Обновляем позицию слайдера при изменении размера окна
    window.addEventListener('resize', updateSliderPosition);
    
    // Инициализируем слайдер
    updateSliderPosition();
});

/* Варианты приобретения */

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.purchaseOptions__content');
    const slides = document.querySelectorAll('.purchaseOptions__card');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let currentTranslateX = 0;
    let isSwiping = false;

    // Задаём отступ между карточками (16px)
    const gap = 16; // Ширина отступа

    // Получаем текущую ширину одного слайда, включая отступ
    function getCurrentSlideWidth() {
        return slides[0].offsetWidth + gap;  // ширина слайда + отступ
    }

    // Обновляем положение слайдера
    function updateSliderPosition() {
        const slideWidth = getCurrentSlideWidth();
        sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // используем фактическую ширину слайда с учётом отступа
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        isSwiping = true;
        currentTranslateX = -currentIndex * getCurrentSlideWidth();
        sliderWrapper.style.transition = 'none'; // отключаем плавность во время свайпа
    }

    function handleTouchMove(event) {
        if (!isSwiping) return;

        event.preventDefault();
        const touchX = event.touches[0].clientX;
        const deltaX = touchX - startX;

        // Перемещаем слайдер по оси X в зависимости от движения пальца
        const translateX = currentTranslateX + deltaX;
        sliderWrapper.style.transform = `translateX(${translateX}px)`;
    }

    function handleTouchEnd(event) {
        const endX = event.changedTouches[0].clientX;
        const deltaX = startX - endX;
        const slideWidth = getCurrentSlideWidth(); // Получаем актуальную ширину слайда с отступом

        // Если свайп был более чем на 50px, то листаем
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0 && currentIndex < totalSlides - 1) {
                currentIndex++;
            } else if (deltaX < 0 && currentIndex > 0) {
                currentIndex--;
            }
        }

        // Возвращаем слайдер на границу слайда с плавностью
        sliderWrapper.style.transition = 'transform 0.3s ease-in-out'; // добавляем плавность после завершения свайпа
        updateSliderPosition();
        isSwiping = false;
    }

    // Добавляем обработчики событий для свайпа
    sliderWrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    sliderWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    sliderWrapper.addEventListener('touchend', handleTouchEnd);

    // Обновляем позицию слайдера при изменении размера окна
    window.addEventListener('resize', updateSliderPosition);
    
    // Инициализируем слайдер
    updateSliderPosition();
});

/* Мы строим дома из высококачественных материалов */

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.materials__cards');
    const slides = document.querySelectorAll('.materials__card');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let currentTranslateX = 0;
    let isSwiping = false;

    // Обновляем ширину слайдов в зависимости от экрана
    function updateSliderPosition() {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`; // используем vw для адаптивности
    }

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
      isSwiping = true;
      currentTranslateX = -currentIndex * window.innerWidth;
      sliderWrapper.style.transition = 'none'; // отключаем плавность во время свайпа
    }

    function handleTouchMove(event) {
      if (!isSwiping) return;

      event.preventDefault();
      const touchX = event.touches[0].clientX;
      const deltaX = touchX - startX;

      // Перемещаем слайдер по оси X в зависимости от движения пальца
      const translateX = currentTranslateX + deltaX;
      sliderWrapper.style.transform = `translateX(${translateX}px)`;
    }

    function handleTouchEnd(event) {
      const endX = event.changedTouches[0].clientX;
      const deltaX = startX - endX;

      // Если свайп был более чем на 50px, то листаем
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex < totalSlides - 1) {
          currentIndex++;
        } else if (deltaX < 0 && currentIndex > 0) {
          currentIndex--;
        }
      }

      // Возвращаем слайдер на границу слайда с плавностью
      sliderWrapper.style.transition = 'transform 0.3s ease-in-out'; // добавляем плавность после завершения свайпа
      updateSliderPosition();
      isSwiping = false;
    }

    // Добавляем обработчики событий для свайпа
    sliderWrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    sliderWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    sliderWrapper.addEventListener('touchend', handleTouchEnd);

    // Обновляем позицию слайдера при изменении размера окна
    window.addEventListener('resize', updateSliderPosition);
});

/*  Мы строим дома из высококачественных материалов - mobile */

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.materials-mobile .materials__cards');
    const slides = document.querySelectorAll('.materials-mobile .materials__card');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startX = 0;
    let currentTranslateX = 0;
    let isSwiping = false;

    // Задаём отступ между карточками (16px)
    const gap = 16; // Ширина отступа

    // Получаем текущую ширину одного слайда, включая отступ
    function getCurrentSlideWidth() {
        return slides[0].offsetWidth + gap;  // ширина слайда + отступ
    }

    // Обновляем положение слайдера
    function updateSliderPosition() {
        const slideWidth = getCurrentSlideWidth();
        sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // используем фактическую ширину слайда с учётом отступа
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        isSwiping = true;
        currentTranslateX = -currentIndex * getCurrentSlideWidth();
        sliderWrapper.style.transition = 'none'; // отключаем плавность во время свайпа
    }

    function handleTouchMove(event) {
        if (!isSwiping) return;

        event.preventDefault();
        const touchX = event.touches[0].clientX;
        const deltaX = touchX - startX;

        // Перемещаем слайдер по оси X в зависимости от движения пальца
        const translateX = currentTranslateX + deltaX;
        sliderWrapper.style.transform = `translateX(${translateX}px)`;
    }

    function handleTouchEnd(event) {
        const endX = event.changedTouches[0].clientX;
        const deltaX = startX - endX;
        const slideWidth = getCurrentSlideWidth(); // Получаем актуальную ширину слайда с отступом

        // Если свайп был более чем на 50px, то листаем
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0 && currentIndex < totalSlides - 1) {
                currentIndex++;
            } else if (deltaX < 0 && currentIndex > 0) {
                currentIndex--;
            }
        }

        // Возвращаем слайдер на границу слайда с плавностью
        sliderWrapper.style.transition = 'transform 0.3s ease-in-out'; // добавляем плавность после завершения свайпа
        updateSliderPosition();
        isSwiping = false;
    }

    // Добавляем обработчики событий для свайпа
    sliderWrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    sliderWrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    sliderWrapper.addEventListener('touchend', handleTouchEnd);

    // Обновляем позицию слайдера при изменении размера окна
    window.addEventListener('resize', updateSliderPosition);
    
    // Инициализируем слайдер
    updateSliderPosition();
});

/* СТРАНИЦА ДОМА */

/* hero-desctop */

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".hero__slider-image");
    const radioButtons = document.querySelectorAll("input[type='radio'][name='hero-radio-1']");
    const prevBtn = document.querySelector(".hero__prev-btn");
    const nextBtn = document.querySelector(".hero__next-btn");

    let currentIndex = 0;
    let totalSlides = images.length;

    // Функция для обновления слайдов
    function updateSlide(index) {
        // Скрыть все изображения
        images.forEach((img, i) => {
            img.classList.remove("active");
            radioButtons[i].checked = false;
        });

        // Показать текущее изображение
        images[index].classList.add("active");
        radioButtons[index].checked = true;
    }

    // Функция для переключения на следующий слайд
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide(currentIndex);
    }

    // Функция для переключения на предыдущий слайд
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide(currentIndex);
    }

    // Навигация через радио-кнопки
    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener("click", function () {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });

    // Обработчики для кнопок "Next" и "Prev"
    nextBtn.addEventListener("click", showNextSlide);
    prevBtn.addEventListener("click", showPrevSlide);
});

/* hero-mobile */

document.addEventListener("DOMContentLoaded", function () {
    // Ищем необходимые элементы
    const sliderImages = document.querySelectorAll('.mobile-hero__slider-image');
    const radioButtons = document.querySelectorAll('input[name="mobile-hero-radio-1"]');
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;

    // Функция для смены изображений
    function changeImage(index) {
        // Убираем активный класс у всех изображений
        sliderImages.forEach(img => img.classList.remove('active'));
        
        // Убираем checked у всех радио-кнопок
        radioButtons.forEach(radio => radio.checked = false);
        
        // Добавляем активный класс и ставим checked на выбранную радиокнопку
        sliderImages[index].classList.add('active');
        radioButtons[index].checked = true;
        
        // Обновляем текущий индекс
        currentIndex = index;
    }

    // Функция для перехода к следующему изображению
    function nextImage() {
        let nextIndex = (currentIndex + 1) % sliderImages.length;
        changeImage(nextIndex);
    }

    // Функция для перехода к предыдущему изображению
    function prevImage() {
        let prevIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        changeImage(prevIndex);
    }

    // Добавляем обработчики событий для свайпов
    const slider = document.querySelector('.hero__images__slider');

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', () => {
        const deltaX = endX - startX;
        
        // Проверяем направление свайпа
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // Свайп вправо, показываем предыдущее изображение
                prevImage();
            } else {
                // Свайп влево, показываем следующее изображение
                nextImage();
            }
        }
        
        // Сбрасываем значения для следующего свайпа
        startX = 0;
        endX = 0;
    });

    // Обрабатываем нажатие на радио-кнопки
    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            changeImage(index);
        });
    });

});



/* header-list */

document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.hero__content-section.scrolls');

    if (!sliderContainer) return; // Проверка на наличие контейнера

    // Обработка события прокрутки колесом мыши
    function handleWheelScroll(e) {
        e.preventDefault();
        // Прокрутка контейнера по горизонтали
        sliderContainer.scrollLeft += e.deltaY !== 0 ? e.deltaY : e.deltaX;
    }

    // Переменные для хранения начальной позиции пальца и текущего смещения
    let startX;
    let scrollLeftStart;

    // Обработка начала касания
    function handleTouchStart(e) {
        startX = e.touches[0].pageX;
        scrollLeftStart = sliderContainer.scrollLeft;
    }

    // Обработка движения пальца
    function handleTouchMove(e) {
        e.preventDefault(); // Отключаем стандартное поведение, чтобы избежать вертикальной прокрутки
        const touchX = e.touches[0].pageX;
        const deltaX = touchX - startX;
        sliderContainer.scrollLeft = scrollLeftStart - deltaX;
    }

    // Добавление обработчиков событий
    sliderContainer.addEventListener('wheel', handleWheelScroll);
    sliderContainer.addEventListener('touchstart', handleTouchStart);
    sliderContainer.addEventListener('touchmove', handleTouchMove);
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".finishing__slider-image");
    const radioButtons = document.querySelectorAll("input[type='radio'][name='finishing-radio-1']");
    const prevBtn = document.querySelector(".finishing__prev-btn");
    const nextBtn = document.querySelector(".finishing__next-btn");

    let currentIndex = 0;
    let totalSlides = images.length;

    // Функция для обновления слайдов
    function updateSlide(index) {
        // Скрыть все изображения
        images.forEach((img, i) => {
            img.classList.remove("active");
            radioButtons[i].checked = false;
        });

        // Показать текущее изображение
        images[index].classList.add("active");
        radioButtons[index].checked = true;
    }

    // Функция для переключения на следующий слайд
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide(currentIndex);
    }

    // Функция для переключения на предыдущий слайд
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide(currentIndex);
    }

    // Навигация через радио-кнопки
    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener("click", function () {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });

    // Обработчики для кнопок "Next" и "Prev"
    nextBtn.addEventListener("click", showNextSlide);
    prevBtn.addEventListener("click", showPrevSlide);
});

document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('table-container');
    const tables = document.querySelectorAll('.hero__table');
    const buttons = document.querySelectorAll('.hero__btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    // Функция для отображения таблицы и обновления состояния кнопок
    function showTable(index) {
        tables.forEach((table, i) => {
            table.classList.toggle('active', i === index);
        });
        buttons.forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });

        // Обновляем высоту контейнера
        tableContainer.style.height = tables[index].offsetHeight + 'px';

        // Обновляем состояние стрелок
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === tables.length - 1;
    }

    // Изначально показываем первую таблицу
    showTable(currentIndex);

    // Добавляем обработчики событий на все кнопки
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            showTable(currentIndex);
        });
    });

    // Добавляем обработчики для стрелок
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showTable(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < tables.length - 1) {
            currentIndex++;
            showTable(currentIndex);
        }
    });

    // Обновляем высоту при изменении размера окна
    window.addEventListener('resize', () => {
        const activeTable = Array.from(tables).find(table => table.classList.contains('active'));
        if (activeTable) {
            tableContainer.style.height = activeTable.offsetHeight + 'px';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('plots__content');
    const tables = document.querySelectorAll('.plots-container');
    const buttons = document.querySelectorAll('.plots__btn');
    const prevBtn = document.getElementById('plots-prev-btn');
    const nextBtn = document.getElementById('plots-next-btn');
    let currentIndex = 0;

    // Функция для отображения таблицы и обновления состояния кнопок
    function showTable(index) {
        tables.forEach((table, i) => {
            table.classList.toggle('active', i === index);
        });
        buttons.forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });

        // Обновляем высоту контейнера
        tableContainer.style.height = tables[index].offsetHeight + 'px';

        // Обновляем состояние стрелок
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === tables.length - 1;
    }

    // Изначально показываем первую таблицу
    showTable(currentIndex);

    // Добавляем обработчики событий на все кнопки
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            showTable(currentIndex);
        });
    });

    // Добавляем обработчики для стрелок
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showTable(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < tables.length - 1) {
            currentIndex++;
            showTable(currentIndex);
        }
    });

    // Обновляем высоту при изменении размера окна
    window.addEventListener('resize', () => {
        const activeTable = Array.from(tables).find(table => table.classList.contains('active'));
        if (activeTable) {
            tableContainer.style.height = activeTable.offsetHeight + 'px';
        }
    });
});

