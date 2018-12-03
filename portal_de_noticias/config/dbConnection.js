var mysql = require('mysql');

const connMySQL = () => {
    return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		pass: '',
		database: 'portal_noticias'
	});
}

module.exports = function () {
	return connMySQL;
}