var db = require('../datalayer/dbaccess');

var salonVille = {
    getSalons: function (req , res) {
        if (req.params.ville) {
            db.exec("select MIN(id_salon),titre_salon from salon where ville_salon='" + req.params.ville + "' GROUP BY titre_salon", function callback(result) {
                var t = JSON.parse(result)
                res.json(t);
            })
        } else {
            res.status(400)
            res.json({
                "message": "Requete non valide",
                "status": "400"
            })
        }
    }
};

module.exports = salonVille;