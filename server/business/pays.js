var db = require('../datalayer/dbaccess');

var pays = {
    getAll: function (req , res) {
        db.exec("select MIN(ID_Pays),Nom_Pays_FR from pays GROUP BY Nom_Pays_FR",function callback(result) {
            var t = JSON.parse(result)
            res.json(t);
        })
    },
    getID: function (req , res) {
        if (req.params.pays) {
            db.exec("select ID_Pays from pays where Nom_Pays_FR=" +"'" + req.params.pays +"'", function retour(result) {
                res.json(JSON.parse(result))
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


module.exports = pays;
