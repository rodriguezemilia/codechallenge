document.getElementById("formulario").addEventListener('submit', function(event){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    const formData = {
        nombre, apellido, fechaNacimiento 
    };



const url ='https://jsonplaceholder.typicode.com/users';

const opciones = {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(formData)
    }    ;

fetch (url, opciones)
.then(response => {

    if (!response.ok){
        throw new Error("Error");
    } return response.json();
})
.then(data =>{
 console.log('Respuesta', data);
})
.catch( error=>{
    console.error('Error', error);
});
});