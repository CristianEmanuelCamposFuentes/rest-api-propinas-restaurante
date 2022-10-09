let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', GuardarCliente);

function GuardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //Revisar si hay campos vacios
    const camposVacios = [mesa, hora].some( campo => campo === '');

    if(camposVacios){
        //Verificar si ya hay una alerta
        const alerta = document.querySelector('.invalid-feedback');
        if(!alerta){
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);


        // Eliminar la alerta despues de 3 segundos
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }

        return;
        
    } 
        console.log(cliente);

    
}
