const productosCtrl = {};
const Productos  = require('../models/productos')
// const MercadoPagoSchema  = require('../models/mercadopago')
const mercadopago = require ('mercadopago');

// API
productosCtrl.getProductos = async (req,res) =>{

const productos = await Productos.find();
res.json(productos);

};

productosCtrl.newProductos = async(req,res) => {
    const productos = new Productos({
        
        fecha:req.body.fecha,
        titulo:req.body.titulo,
        subtitulo:req.body.subtitulo,
        descripcion:req.body.descripcion,
        imagen1:req.body.imagen1,
        imagen2:req.body.imagen2,
        imagen3:req.body.imagen3,
        imagen4:req.body.imagen4,
        imagen5:req.body.imagen5,
        imagen6:req.body.imagen6,
        categoria:req.body.categoria,
        likes:req.body.likes,
        vistas:req.body.vistas,
        hash:req.body.hash


    });
       await productos.save();
       res.json('Guardado');

};

 productosCtrl.getProducto = async(req,res) => { 
    const productos = await Productos.findById(req.params.id);
    res.json(productos);

};

productosCtrl.modificarProducto = async (req,res) => {
    const { id } = req.params;
    const producto = { 
        fecha:req.body.fecha,
        titulo:req.body.titulo,
        subtitulo:req.body.subtitulo,
        descripcion:req.body.descripcion,
        imagen1:req.body.imagen1,
        imagen2:req.body.imagen2,
        imagen3:req.body.imagen3,
        imagen4:req.body.imagen4,
        imagen5:req.body.imagen5,
        imagen6:req.body.imagen6,
        categoria:req.body.categoria,
        likes:req.body.likes,
        vistas:req.body.vistas,
        tituloImagen: req.body.tituloImagen,
        hash: req.body.hash                               

    };
    
       await Productos.findByIdAndUpdate(id, {$set: producto}, {new: true});
       res.json('actualizado');

};

productosCtrl.deleteProducto = async (req,res) => {
    const { id } = req.params;
    await Productos.findByIdAndDelete(id);
    res.json("eliminado");
};

//Mercadopago

productosCtrl.nuevoPago = async (req,res) => {
    var { id } = req.params
     id = Number(id);
     mercadopago.configure({access_token: 'TEST-5952899216905685-020218-5db2793d7558989dbee92f29a816339a-205944115'});
   
  let preference = { 

    back_urls: {
        success: "http://192.168.43.55:4200/mercadopagofin/",
        failure: "http://192.168.43.55:4200/mercadopagofin/",
        pending: "http://192.168.43.55:4200/mercadopagofin/"
    },
    auto_return: "approved",
      
    items: [
        { title: 'Jethro Caps ',
          unit_price: (id),
          currency_id: 'ARS',
          quantity: 1,
          
        }
            ]

       
    
    };
  
    await mercadopago.preferences.create(preference)
    .then(function(res){  
    global.init_point = res.body.init_point;
    console.log(global.init_point)}).catch(function(error){console.log(error);});
    res.json({link: (global.init_point)}); 
};



productosCtrl.pagoResp = async (req,res) => {
        await  res.json(req.query);    
        console.log('loquellega',req.query)
        
        


};



module.exports = productosCtrl