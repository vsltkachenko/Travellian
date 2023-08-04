/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules'
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import '../../scss/base/swiper.scss'
// Повний набір стилів з scss/libs/swiper.scss
// import '../../scss/libs/swiper.scss'
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.slider-main')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-main', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 1000,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			// effect: 'fade',
			// fadeEffect: {
			// 	crossFade: true,
			// },
			/*
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			pagination: {
				el: '.slider-main__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-main__button-prev',
				nextEl: '.slider-main__button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {},
		})
	}
	if (document.querySelector('.slider-destinations')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-destinations', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			autoHeight: true,
			speed: 1000,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			// effect: 'fade',
			// fadeEffect: {
			// 	crossFade: true,
			// },
			/*
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			pagination: {
				el: '.slider-destinations__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-destinations__controls .slider-controls__button-prev',
				nextEl: '.slider-destinations__controls .slider-controls__button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: true,
				},
				480: {
					slidesPerView: 2.2,
					spaceBetween: 20,
					autoHeight: true,
				},
				/*
				640: {
					slidesPerView: 3.2,
					spaceBetween: 20,
					autoHeight: true,
				},
				*/
				768: {
					slidesPerView: 3.2,
					spaceBetween: 20,
					autoHeight: true,
				},
				1040: {
					slidesPerView: 4.2,
					spaceBetween: 32,
				},
				/*
				992: {
					slidesPerView: 3.2,
					spaceBetween: 30,
					autoHeight: true,
				},
				
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				*/
			},

			// Події
			on: {},
		})
	}
	if (document.querySelector('.slider-offer')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-offer', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			autoHeight: true,
			speed: 1000,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			// effect: 'fade',
			// fadeEffect: {
			// 	crossFade: true,
			// },
			/*
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			pagination: {
				el: '.slider-offer__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-offer__controls .slider-controls__button-prev',
				nextEl: '.slider-offer__controls .slider-controls__button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20,
					autoHeight: true,
				},
				/*
				640: {
					slidesPerView: 3.2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				*/
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
					autoHeight: true,
				},
				1040: {
					slidesPerView: 3,
					spaceBetween: 32,
					autoHeight: true,
				},
				/*
				992: {
					slidesPerView: 3.2,
					spaceBetween: 30,
					autoHeight: true,
				},
				
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				*/
			},

			// Події
			on: {},
		})
	}
	if (document.querySelector('.slider-planners')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-planners', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,

			speed: 1000,

			loop: true,

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					// autoHeight: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20,
					// autoHeight: true,
				},

				640: {
					slidesPerView: 2.5,
					spaceBetween: 20,
					// autoHeight: true,
				},

				768: {
					slidesPerView: 3.5,
					spaceBetween: 20,
					// autoHeight: true,
				},

				992: {
					slidesPerView: 4.5,
					spaceBetween: 20,
					// autoHeight: true,
				},
				/*
				1040: {
					slidesPerView: 5.5,
					spaceBetween: 20,
					autoHeight: true,
				},
				*/

				1268: {
					slidesPerView: 5,
					spaceBetween: 32,
					// autoHeight: true,
				},
			},

			// Події
			on: {},
		})
	}
	if (document.querySelector('.slider-gallery')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-gallery', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			autoHeight: true,
			speed: 1000,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			// effect: 'fade',
			// fadeEffect: {
			// 	crossFade: true,
			// },
			/*
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			pagination: {
				el: '.slider-gallery__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-gallery__controls .slider-controls__button-prev',
				nextEl: '.slider-gallery__controls .slider-controls__button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				640: {
					slidesPerView: 2.5,
					spaceBetween: 20,
					// autoHeight: true,
				},
				/*
				640: {
					slidesPerView: 3.2,
					spaceBetween: 20,
					autoHeight: true,
				},
				*/
				768: {
					slidesPerView: 3.5,
					spaceBetween: 20,
					autoHeight: true,
				},
				/*
				1040: {
					slidesPerView: 4,
					spaceBetween: 32,
				},
				992: {
					slidesPerView: 3.2,
					spaceBetween: 30,
					autoHeight: true,
				},
				
				*/
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			// Події
			on: {},
		})
	}
	if (document.querySelector('.slider-experiences')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-experiences', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			autoHeight: true,
			speed: 1000,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			// effect: 'fade',
			// fadeEffect: {
			// 	crossFade: true,
			// },
			/*
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація

			pagination: {
				el: '.slider-experiences__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-experiences__controls .slider-controls__button-prev',
				nextEl: '.slider-experiences__controls .slider-controls__button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: true,
				},
				/*
				480: {
					slidesPerView: 1.2,
					spaceBetween: 20,
					autoHeight: true,
				},*/

				640: {
					slidesPerView: 1.2,
					spaceBetween: 20,
					// autoHeight: true,
				},

				768: {
					slidesPerView: 1.5,
					spaceBetween: 20,
					autoHeight: true,
				},
				1152: {
					slidesPerView: 2.1,
					spaceBetween: 32,
					autoHeight: true,
				},
				/*
				992: {
					slidesPerView: 3.2,
					spaceBetween: 30,
					autoHeight: true,
				},
				
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				*/
				1440: {
					slidesPerView: 2.5,
					spaceBetween: 30,
				},
			},

			// Події
			on: {},
		})
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll')
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index]
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar')
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			})
			sliderScroll.scrollbar.updateSize()
		}
	}
}

window.addEventListener('load', function (e) {
	// Запуск ініціалізації слайдерів
	initSliders()
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
})
