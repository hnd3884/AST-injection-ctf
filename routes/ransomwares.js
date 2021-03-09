var express = require('express');
var router = express.Router();
var { parse } = require('ion-parser')
var multer = require('multer')
var json2toml = require('json2toml');

var { Ransomware } = require('../models');

var upload = multer()

router.get('/', async function (req, res, next) {
  try {
    const ransomwares = await Ransomware.findAll()
    res.render('ransomwarelist', { title: 'Ransomwares', ransomwares: ransomwares });

  } catch {
    res.sendStatus(500)
  }
});

router.get('/export', async function (req, res, next) {
  try {
    const ransomwares = await Ransomware.findAll({ raw: true })
    var exportFile = json2toml(ransomwares);
    res.set({ "Content-Disposition": "attachment; filename=\"export.toml\"" });
    res.send(exportFile);

  } catch {
    res.sendStatus(500)
  }
});

router.get('/:id', async function (req, res, next) {
  try {
    const ransomware = await Ransomware.findByPk(req.params.id)
    res.render('ransomware', { title: ransomware.name, ransomware: ransomware });
  } catch {
    res.sendStatus(500)
  }
});

router.get('/:id/config', async function (req, res) {
  try {
    const ransomware = await Ransomware.findByPk(req.params.id)
    var config = json2toml(ransomware.get({ plain: true }));
    res.set({ "Content-Disposition": "attachment; filename=\"config.toml\"" });
    res.send(config);

  } catch {
    res.sendStatus(500)
  }
});

router.post('/:id/config', upload.single('config'), async function (req, res) {
  try {

    var config = parse(req.file.buffer.toString());
    console.log(req.file.buffer.toString())

    // await Ransomware.update(config, { where: { id: req.params.id } })  // database locked for maintenance
    res.redirect('/ransomware/' + req.params.id);

  } catch {
    res.sendStatus(500)
  }
});

module.exports = router;
