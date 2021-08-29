
//variables
const mobileTrigger = document.querySelector('.mobile-trigger');
const innerWrapper = document.querySelector('.inner-wrapper');
const openMedication = document.querySelector('.open_medication');
const medicationClose = document.querySelector('.medication__close');
const overlay = document.querySelector('.overlay');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const numberDay = document.querySelector('#number');
const dminus = document.querySelector('.dminus');
const dplus = document.querySelector('.dplus');
const dose = document.querySelector('#dose');
const medicationItem = document.querySelectorAll('.medication__left .medication__item')
//main side nav toggle
mobileTrigger.addEventListener('click', () => {
    mobileTrigger.classList.toggle('close-trigger');
    innerWrapper.classList.toggle('slide-menu');
})
//medication lightbox toggle
openMedication.addEventListener('click', () => {
    overlay.classList.add('medication_open')
})

medicationClose.addEventListener('click', () => {
    overlay.classList.remove('medication_open')
})
//medication how many times a day
plus.addEventListener('click', () => {
    if (numberDay.value <= 4) {
        numberDay.setAttribute('value', parseInt(numberDay.value) + 1);
    }
})
minus.addEventListener('click', () => {
    if (numberDay.value >= 1) {
        numberDay.setAttribute('value', parseInt(numberDay.value) - 1);
    }
})
//medication set time and dose
dplus.addEventListener('click', () => {
    if (dose.value <= 4) {
        dose.setAttribute('value', parseInt(dose.value) + 1);
    }
})
dminus.addEventListener('click', () => {
    if (dose.value >= 1) {
        dose.setAttribute('value', parseInt(dose.value) - 1);
    }
})
//medication sidebar active item
medicationItem.forEach(item => {
    item.addEventListener('click', () => {
        medicationItem.forEach(rm => {
            rm.classList.remove('selected')
        })
        if (item.classList.contains('selected') === false) {
            item.classList.add('selected');
        }
    })
})