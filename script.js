const inputs = document.querySelectorAll('.input');
//arrey com dois elementos, precisa tmabém adicionar um event listener para rastrear a mudança do input e ativar a função//
const button = document.querySelector('.login_button');

const handleFocus = ({target})=>{
    const span = target.previousElementSibling;
    span.classList.add('span-active')
}
//desestruturar o target para hegar no span, que é o objeto que queremos usar//

const handleFocusOut = ({target})=>{
    if(target.value === ''){
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [username, password] = inputs;
    if(username.value && password.value.length >= 8){
        button.removeAttribute('disabled')
    } else{
        button.setAttribute('disabled', '')
    }

}

inputs.forEach((input)=>input.addEventListener('focus', handleFocus));
inputs.forEach((input)=>input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input)=>input.addEventListener('input', handleChange));