var db = require('../datalayer/dbaccess');

var categories = {
    getAll: function (req , res) {
        db.exec("select libelle from categorie_societe",function callback(result) {
            var t = JSON.parse(result)
            res.json(t);
        })
    }
};


module.exports = categories;
