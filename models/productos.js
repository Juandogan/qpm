const mongoose = require('mongoose');
const { Schema } = mongoose;



// modelo de datos PROMOS y CARTA
const ProductoSchema = new Schema({

  
  fecha:{type: String, required : false},
  titulo:{type: String, required : false},
  subtitulo:{type: String, required : false},
  descripcion:{type: String, required : false},
  imagen1:{type: String, required : false},
  imagen2:{type: String, required : false},
  imagen3:{type: String, required : false},
  imagen4:{type: String, required : false},
  imagen5:{type: String, required : false},
  imagen6:{type: String, required : false},
  categoria:{type: String, required : false},
  likes:{type: Number, required : false},
  vistas: {type: Number, require : false},
  autor:{type: String, required : false},
  tituloImagen:{type: String, required : false},
  hash:{type: String, required: false},

  //mercadoPago
    title:{type: String, required: false},
    unit_price:{type: Number, required: false}, 
    quantity:{type: Number, required: false} 


  //pedidosAdm
  
  

});


module.exports = mongoose.model('ProductoSchema', ProductoSchema); 
