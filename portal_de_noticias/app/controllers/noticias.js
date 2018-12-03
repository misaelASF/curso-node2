module.exports.noticias = (app, req, res) => {
  	var connection = app.config.dbConnection();
  	var noticiasModel = new app.app.models.noticiasDAO(connection);

	noticiasModel.getNoticias(function(error, result){
          res.render('noticias/noticias', {noticias : result});
	});
}

module.exports.noticia = (app, req, res) => {
	var connection = app.config.dbConnection();

	var noticiasModel = new app.app.models.noticiasDAO(connection);

	var id_noticia = req.query;

	noticiasModel.getNoticia(id_noticia, function(error, result) {
          res.render('noticias/noticia', {noticia : result});
	});
}