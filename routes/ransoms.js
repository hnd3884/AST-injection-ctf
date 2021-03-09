var express = require('express');
var router = express.Router();
const ION = require('ion-parser')
var multer = require('multer')
var json2toml = require('json2toml');

var { Ransom } = require('../models');

var upload = multer()

router.get('/', async function (req, res, next) {
    try {
        const ransoms = await Ransom.findAll()
        res.render('ransom', { title: 'Ransoms', ransoms: ransoms });
    } catch {
        res.sendStatus(500)
    }
});

router.get('/export', async function (req, res, next) {
    try {
        const ransoms = await Ransom.findAll({ raw: true })
        var exportFile = json2toml(ransoms);
        res.set({ "Content-Disposition": "attachment; filename=\"export.toml\"" });
        res.send(exportFile);
    } catch {
        sendStatus(500)
    }
});

module.exports = router;
