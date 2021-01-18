//Vamos a hacer nuestro primer servidor http:

//1. Cargar una librería http

const http= require('http'); //require es una instruccion de nodejs que sire para cargar librerías

//2. Definir un servidor

const server = http.createServer(function(request, response){
    response.writeHead(200,{ 'Content-type':'text/html '});
    response.end(' Wake up, <b>Neo</b>')
    
    //Aquí se pone el código que se va a ejecutar cada vez que este servidor http reciba una petición
}) //Es un método de la librería http que acepta disintos parámetros. El primero es requestListener que es un "escuchador o resolvedor de peticiones". Se encarga de que cada vez que llegue una petición http a nusestro servidor ejecute una funcion


//3. Arrancar el servidor

server.listen(1337, '127.0.0.1')
console.log(' Servidor arrancado en http://127.0.0.1:1337');

