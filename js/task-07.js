const input = document.querySelector('#font-size-control');

input.addEventListener('input', setRange);

function setRange() {
    const spanText = document.querySelector('#text')
    const rangeValue = input.value
    spanText.style.fontSize = rangeValue + 'px';
}