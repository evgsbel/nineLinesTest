import './vendor';
import './helpers';

// gauge

let slider = document.querySelector('.gauge__range');
let result = document.querySelector('.gauge__result');
let mask = document.querySelector('.gauge__metr__tick');

function rangeChangeEvent() {
	let percent = slider.value;

	mask.style.transform = `rotate(${percent * 180 / 100}deg)`;
	result.textContent = `${percent} lvl`;
}
slider.addEventListener('input', rangeChangeEvent);

// phone mask

$('#phone').mask('+7(999) 999-99-99');
