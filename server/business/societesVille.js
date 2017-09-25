var db = require('../datalayer/dbaccess');

var societeVille = {
    getSocietes: function (req , res) {
        if (req.params.ville) {
            db.exec("select distinct nom_societe from partenaires where ville_societe='" + req.params.ville + "'", function callback(result) {
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

module.exports = societeVille;