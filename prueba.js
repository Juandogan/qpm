
//https
const express = require ('express'); 
const app = express(); // API
const fs = require('fs');
const https = require('https');

const PUERTO = 3000 ;

https.createServer({
   cert: fs.readFileSync('Certificate.crt'),
   key: fs.readFileSync('Private.key')
 },app).listen(PUERTO, function(){
	console.log('Servidor https correindo en el puerto 443');
});

app.get('/', function(req, res){
    console.log('work')
	res.send('Hola, estas en la pagina inicial');
	console.log('Se recibio una petición get a través de https');
});