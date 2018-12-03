module.exports.index = function(application, req, res){
	res.render('index', {validacao:{}});
}

module.exports.autenticar = function(application, req, res){
	
	var dados = req.body;

	req.assert('usuario', 'Campo usuário não pode ser vazio').notEmpty();
	req.assert('senha', 'Campo senha não pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros) {
		res.render('index', {validacao:erros});
		return;
	}

	var connection = application.config.dbConnection;
	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.autenticar(dados, req, res);

	//res.send('Logado com sucesso!');

}