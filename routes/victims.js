var express = require('express');
var router = express.Router();
const ION = require('ion-parser')
var multer = require('multer')
var json2toml = require('json2toml');

var { Victim } = require('../models');

var upload = multer()

router.get('/', async function (req, res, next) {
  try {
    const victims = await Victim.findAll({ raw: true })
    res.render('victimlist', { title: 'Victims', victims: victims });
  } catch {
    res.sendStatus(500)
  }
});

router.get('/export', async function (req, res, next) {
  try {
    const victims = await Victim.findAll({ raw: true })
    var exportFile = json2toml(victims);
    res.set({ "Content-Disposition": "attachment; filename=\"export.toml\"" });
    res.send(exportFile);
  } catch {
    res.sendStatus(500)
  }
});

router.get('/:id', async function (req, res, next) {
  try {
    const victim = await Victim.findByPk(req.params.id)
    res.render('victim', { title: victim.name, victim: victim });
  } catch {
    res.sendStatus(500)
  }
});

router.get('/:id/detail', async function (req, res) {
  try {
    const victim = await Victim.findByPk(req.params.id)
    var config = json2toml(victim.get({ plain: true }));
    res.set({ "Content-Disposition": "attachment; filename=\"detail.toml\"" });
    res.send(config);
  } catch {
    res.sendStatus(500)
  }
});

module.exports = router;
