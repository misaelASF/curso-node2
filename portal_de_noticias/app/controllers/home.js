module.exports.index = (app, req, res) => {

	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.noticiasDAO(connection);

	noticiasModel.getUltimasNoticias(function(error, result) {
		console.log(result)
        res.render('home/index', {noticias: result});
	});
   
}