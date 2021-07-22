const CARRO = require('../models/carModel');
const router = require('../routes/api');

//Lista Carros
exports.listCars = function (req, res, next){
    let filtro = {}

    //Tratados indivudualmente para seguranca dos parametros passados
    //Filtra pela marca
    if(req.query.marca !== undefined){
        filtro.marca = new RegExp(req.query.marca ,'i');
    }

    //Filtra pelo modelo
    if(req.query.modelo !== undefined){
        filtro.modelo = new RegExp(req.query.modelo, 'i');
    }
    
    //Filtra pela versao
    if(req.query.versao !== undefined){
        filtro.versao = new RegExp(req.query.versao, 'i');
    }

    //Filtra pelo ano, podendo ser por range
    if(req.query.anoInicio !== undefined || req.query.anoFim !== undefined){
        filtro.ano = {}
        if(req.query.anoInicio !== undefined){
            filtro.ano.$gte = req.query.anoInicio;
        }
        if(req.query.anoFim !== undefined){
            filtro.ano.$lte = req.query.anoFim;
        }
    }

    //Filtra pela quilometragem
    if(req.query.km !== undefined){
        filtro.km = new RegExp(req.query.km, 'i');
    }

    //Filtra pelo tipo de cambio
    if(req.query.cambio !== undefined){
        filtro.cambio = new RegExp(req.query.cambio, 'i');
    }

    //Filtra pelo preco, podendo ser por range
    if(req.query.precoInicio !== undefined || req.query.precoFim !== undefined){
        filtro.preco = {}
        if(req.query.precoInicio !== undefined){
            filtro.preco.$gte = req.query.precoInicio 
        }
        if(req.query.precoFim !== undefined){
            filtro.preco.$lte = req.query.precoFim 
        }
    }

    //Faz a busca no banco
    CARRO.find(filtro).then( function(carro){
        res.send(carro);
    }).catch(next);
};

//Busca carro pelo id
exports.getCarById = function(req, res, next){
    
    //Faz a busca no banco pelo id do carro
    CARRO.findById({_id : req.params.id}).then( function(carro){
        res.send(carro);
    }).catch(next);
}

//Adiciona Carro
exports.createCar = function(req, res, next){
    
    //Faz criacao no banco
    CARRO.create(req.body).then( function(carro){
        res.send(carro);
    }).catch(next);
};

//Atualiza Carro
exports.updateCar = function(req, res, next){

    //Faz a atualizacao no banco
    CARRO.findByIdAndUpdate({_id: req.params.id}, req.body).then( function(carro){
            res.send(carro);
        }).catch(next);
};

//Deleta Carro
exports.deleteCar = function(req, res, next){

    //Faz a exclusao no banco
    CARRO.findByIdAndDelete({_id: req.params.id}).then( function(carro){
        res.send(carro);
    }).catch(next);
};