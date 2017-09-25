var db = require('../datalayer/dbaccess');

var villes = {
    getAll: function (req , res) {
        db.exec("select MIN(ID_Partenaire),Ville_Societe from partenaires Group by Ville_Societe",function callback(result) {
            var t = JSON.parse(result)
            res.json(t);
        })
    },
    getVilleByPay: function (req , res) {
        if (req.params.id) {
            db.exec("select MIN(ID_Partenaire),Ville_Societe from partenaires where ID_Pay_Societe=" + req.params.id + " GROUP BY Ville_Societe", function retour(result) {
                res.json(JSON.parse(result))
            })
        }else {
            res.status(400)
            res.json({
                "message": "Requete non valide",
                "status": "400"
            })
        }
    }
};


module.exports = villes;