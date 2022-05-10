
const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit',async(e) => {
    e.preventDefault();

    await fetch('https://sheet.best/api/sheets/c521ecff-12e6-4a73-b67e-330d9ce77c22', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Nombre":formulario.nombre.value,
            "Correo":formulario.correo.value,
            "Telefono":formulario.telefono.value
        })

    });

    registro.classList.remove('activo');
    exito.classList.add('activo');

});