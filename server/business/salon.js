var db = require('../datalayer/dbaccess');

var salons = {
    getAll: function (req , res) {
        db.exec("select MIN(id_salon),titre_salon from salon GROUP BY titre_salon",function callback(result) {
            var t = JSON.parse(result)
            res.json(t);
        })
    },
    getSalonByActivity: function (req , res) {
        db.exec("select MIN(id_salon),titre_salon from salon WHERE id_activite=" + req.params.id + " GROUP BY titre_salon",function callback(result) {
            var t = JSON.parse(result)
            res.json(t);
        })
    }
};


module.exports = salons;
