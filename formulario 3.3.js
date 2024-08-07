const form = document.getElementById('MyForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name === '' || email === '' || message === '') {
        alert('¨Por favor completa todos los campos.');
    } else {
        
        alert('Formulario enviado exitosamente')
        form.reset();
    }
});