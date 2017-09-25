var db = require('../datalayer/dbaccess');
var paysActivity = {
    getPays: function (req, res) {
        if (req.params.id) {
            db.exec("select Nom_Pays_FR from pays where ID_Pays in (select ID_Pay_Societe from partenaires where id_activite=" + req.params.id + ")", function callback(result) {
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

module.exports = paysActivity;