var db = require('../datalayer/dbaccess');

var societes = {
    getAll: function (req , res) {
        db.exec("select MIN(ID_Partenaire),Nom_Societe from partenaires Group by Nom_Societe",function callback(result) {
            var t = JSON.parse(result)
            res.json(t);
        })
    },
    getSocieteByPay: function (req , res) {
        if (req.params.id) {
            db.exec("select MIN(ID_Partenaire),Nom_Societe from partenaires where ID_Pay_Societe=" + req.params.id + " GROUP BY Nom_Societe", function retour(result) {
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


module.exports = societes;