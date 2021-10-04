var mongoose = require('mongoose')

var conexao = ()=>{
    mongoose.connect('mongodb+srv://registrouser:luaninha22@cluster0.wqg7u.mongodb.net/login_registro?retryWrites=true&w=majority')
}
module.exports = conexao