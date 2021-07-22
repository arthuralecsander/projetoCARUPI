const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema do carro
const carShema = new Schema({
    marca : {
        type: String,
        required: [true , '*Campo obrigatorio']
    },
    modelo : {
        type: String,
        required: [true , '*Campo obrigatorio']
    },
    versao : {
        type: String,
        required: [true , '*Campo obrigatorio']
    },
    ano : {
        type: Number,
        required: [true , '*Campo obrigatorio']
    },
    km : {
        type: Number,
        required: [true , '*Campo obrigatorio']
    },
    cambio : {
        type: String
    },
    preco : {
        type: Number,
        required: [true , '*Campo obrigatorio']
    },

})

const CARRO = mongoose.model('Carros', carShema);

module.exports = CARRO;