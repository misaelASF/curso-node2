module.exports.formulario_inclusao_noticia = (app, req, res) => {
	res.render('admin/form_add_noticia', {validacao:{}, noticia:{}});
}

module.exports.noticias_salvar = (app, req, res) => {
	var noticia = req.body;

   	 req.assert('titulo', 'Título é obrigatório').notEmpty();
   	 req.assert('resumo', 'Resumo é obrigatório').notEmpty();
   	 req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
   	 req.assert('autor', 'Autor é obrigatório').notEmpty();
   	 req.assert('autor', 'Notícia é obrigatório').notEmpty();

   	 var erros = req.validationErrors();

   	 if(erros) {
   	 	res.render('admin/form_add_noticia', {validacao: erros, noticia: noticia });
   	 	return;
   	 }

	 var connection = app.config.dbConnection();
  	var noticiasModel = new app.app.models.noticiasDAO(connection);

	noticiasModel.salvarNoticia(noticia, function(error, result){
          res.redirect('/noticias');
	});
}