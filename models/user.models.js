const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    cpf: { type: Number, required: true}, 
    email: { type: String, require: true},
    telefone: { type: Number, required: true},
    sexo: { type: String, required: true},
    dataNascimento: { type: String, required: true} 
});

module.exports = User = mongoose.model('User', UserSchema);