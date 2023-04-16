const input = document.querySelector('#validation-input')
const validLength = Number(input.dataset.length);

input.addEventListener( 'blur', checkInput);

function checkInput (event)
 {
    const inputText = event.target.value;

    if (inputText.length === validLength)
    {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid')
    }
 }

