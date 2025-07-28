document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.formulario');
    const grupoControle = document.querySelectorAll('.formulario--grupo-controle');
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        let formularioValido = true;
        grupoControle.forEach(function(grupo) {
            const campo = grupo.querySelector('input, textarea');
            const mensagemErro = grupo.querySelector('.campo--mensagem-erro');
            if (!campo) return; // Skip if no input or textarea found
            if (campo.value.trim() === '') {
                grupo.classList.add('campo--invalido');
                if (mensagemErro) mensagemErro.textContent = 'Campo é obrigatório.';
                formularioValido = false;
            } else {
                grupo.classList.remove('campo--invalido');
                if (mensagemErro) mensagemErro.textContent = '';
                if (campo.type === 'email' && !campo.validity.valid) {
                    grupo.classList.add('campo--invalido');
                    if (mensagemErro) mensagemErro.textContent = 'Por favor, insira um e-mail válido.';
                    formularioValido = false;
                }
            }
        });

        if (formularioValido) {
            alert('Formulário enviado com sucesso!');
            formulario.reset();
        }
    });
    grupoControle.forEach(function(grupo) {
        const campo = grupo.querySelector('input, textarea');
        const mensagemErro = grupo.querySelector('.campo--mensagem-erro');
        if (
            campo &&
            campo.value.trim() !== '' &&
            (campo.type !== 'email' || campo.validity.valid)
        ) {
            grupo.classList.remove('campo--invalido');
            if (mensagemErro) mensagemErro.textContent = '';
        }
    });
});
