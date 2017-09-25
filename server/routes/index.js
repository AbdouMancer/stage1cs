var express = require('express');
var router = express.Router();
var partner = require('../business/partners');
var activity = require('../business/activities');
var paysActivity = require('../business/paysActivity');
var category = require('../business/categories');
var pays = require('../business/pays');
var societe = require('../business/societes');
var societeVille = require('../business/societesVille');
var ville = require('../business/villes');
var salon = require('../business/salon');
var salonPay = require('../business/salonPay');
var salonVille = require('../business/salonVille');
var request = require('request');

router.post('/api/v1/partners', partner.getPartners);
router.get('/api/v1/activities', activity.getAll);
router.get('/api/v1/paysActivity/:id', paysActivity.getPays);
router.get('/api/v1/activities/:activity', activity.getID);
router.get('/api/v1/categories', category.getAll);
router.get('/api/v1/pays', pays.getAll);
router.get('/api/v1/pays/:pays', pays.getID);

router.get('/api/v1/societes', societe.getAll);
router.get('/api/v1/societes/:id', societe.getSocieteByPay);
router.get('/api/v1/societesVille/:ville', societeVille.getSocietes);
router.get('/api/v1/salonVille/:ville', salonVille.getSalons);
router.get('/api/v1/villes', ville.getAll);
router.get('/api/v1/villes/:id', ville.getVilleByPay);
router.get('/api/v1/salons', salon.getAll);
router.get('/api/v1/salons/:id', salon.getSalonByActivity);
router.get('/api/v1/salonPays/:id', salonPay.getSalonByPay);








router.all('*', function(req, res) {
    res.status(404)
    res.send("Error not found")
    return;
});









//router.delete('/api/v1/product/:id', partner.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */

module.exports = router;
