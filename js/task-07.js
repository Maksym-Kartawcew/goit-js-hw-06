const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

span.style.fontSize = input.value + 'px';

function setRange() {
  const rangeValue = input.value;
  span.style.fontSize = rangeValue + 'px';
}

input.addEventListener('input', setRange);

