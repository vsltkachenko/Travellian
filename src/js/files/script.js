// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js'
// Підключення списку активних модулів
import { flsModules } from './modules.js'
// Підключення списку моїх модулів
import { myModules } from './mymodules.js'

// ============================================================================================================================================================================================================================================================================================================================================================================================
function showSlideInfo() {
	document.addEventListener('click', (e) => {
		const targetSlide = e.target.closest('.slide-planners')
		if (targetSlide && isMobile.any()) {
			e.preventDefault()
			const slider = document.querySelector('.slider-planners')
			const slides = document.querySelectorAll('.slide-planners')

			!targetSlide.classList.contains('show-info') ? slider.classList.add('show-info') : slider.classList.remove('show-info')

			slides.forEach((slide) => {
				slide === targetSlide ? slide.classList.toggle('show-info') : slide.classList.remove('show-info')
			})
		} else {
			const slider = document.querySelector('.slider-planners')
			const slides = document.querySelectorAll('.slide-planners')

			slider.classList.remove('show-info')
			slides.forEach((slide) => {
				slide.classList.remove('show-info')
			})
		}
	})
}

// Запуск всіх модулів
window.addEventListener('load', function () {
	myModules.highlightingActiveMenuItem()
	myModules.gotoSection()
	myModules.magicLineMenu()
	showSlideInfo()
})
// ============================================================================================================================================================================================================================================================================================================================================================================================
