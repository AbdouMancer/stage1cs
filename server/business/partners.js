var db = require('../datalayer/dbaccess');

var partners = {
    getPartners: function(req, res) {
        var activity = req.body.activity;
        var category = req.body.category;
        var pays = req.body.pay;
        var ville = req.body.ville;
        var salon = req.body.salon;
        console.log(activity);
        db.exec("select Nom_Partenaire from partenaires where id_activite="+ activity, function callback(result) {
            var t = JSON.parse(result)
            res.json(t);
        })

    }
};

module.exports = partners;
