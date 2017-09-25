var db = require('../datalayer/dbaccess');

var activities = {
     getAll: function (req , res) {
         db.exec("select MIN(ID_Activite),Nom_Activite_FR from activites GROUP BY Nom_Activite_FR",function callback(result) {
             var t = JSON.parse(result)
             res.json(t);
         })
     },
    getID: function (req , res) {
        db.exec("select ID_Activite from activites WHERE Nom_Activite_FR='"+ req.params.activity + "'",function callback(result) {
            var t = JSON.parse(result)
            res.json(t);
        })
    }
};


module.exports = activities;
