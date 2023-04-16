let counterValue = 0;

const buttons = document.querySelectorAll('#counter button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const action = this.dataset.action;

     if (action === 'increment') {
      counterValue +=1;
    } else if (action === 'decrement') {
      counterValue -=1;
    }

    const counterElement = document.querySelector('#value');
    counterElement.textContent = counterValue;
  });
});