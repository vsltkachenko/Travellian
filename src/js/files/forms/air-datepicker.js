import AirDatepicker from 'air-datepicker'
import { isMobile } from '../functions.js'
// import {isMobileWidth} from '../mymodules.js'

function isMobileWidth() {
	return window.innerWidth < 767.98
}
let isMobileTrue = !!isMobile.any() && isMobileWidth()
let position = 'bottom left'

const bookingElement = document.querySelector('.booking')
const bookingOffsetTop = bookingElement.offsetTop
const bookingoffsetHeight = bookingElement.offsetHeight
const windowHeight = window.innerHeight
const bookingBottom = windowHeight - bookingOffsetTop - bookingoffsetHeight + window.scrollY

if (bookingBottom < 300 && !isMobileTrue) {
	position = function ({ $datepicker, $target, $pointer }) {
		let coords = $target.getBoundingClientRect(),
			dpHeight = $datepicker.clientHeight,
			dpWidth = $datepicker.clientWidth

		let top = coords.y + coords.height / 2 + window.scrollY - dpHeight / 2
		let left = coords.x + coords.width / 2 - dpWidth / 2

		$datepicker.style.left = `${left}px`
		$datepicker.style.top = `${top - 20}px`

		$pointer.style.display = 'none'
	}
}

let dpMin = new AirDatepicker('#check_in', {
	isMobile: isMobileTrue,
	position,
	autoClose: true,
	// range: true,
	// multipleDatesSeparator: ' - '
	// timepicker: true,
	// Handle render process

	buttons: ['today', 'clear'],
	locale: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		today: 'Today',
		clear: 'Clear',
		dateFormat: 'E, dd MMM yyyy',
		timeFormat: 'hh:mm aa',
		firstDay: 0,
	},
	minDate: new Date(),
	onSelect({ date }) {
		dpMax.update({
			minDate: date,
		})
	},
})

let dpMax = new AirDatepicker('#check_out', {
	isMobile: isMobileTrue,
	position,
	autoClose: true,

	buttons: ['today', 'clear'],
	locale: {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		today: 'Today',
		clear: 'Clear',
		dateFormat: 'E, dd MMM yyyy',
		timeFormat: 'hh:mm aa',
		firstDay: 0,
	},
	onSelect({ date }) {
		dpMin.update({
			maxDate: date,
		})
	},
})
