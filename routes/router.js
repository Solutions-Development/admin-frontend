const { Router } = require("express");
const _ = require("../controllers/main");

const router = Router();

router.get('/', _.root);
router.post('/auth', _.auth);

router.get('/conferencistas', _.conferencistas);
router.get('/congreso', _.congreso);
router.get('/docs', _.docs);
router.get('/eventos', _.eventos);
router.get('/sedes', _.sedes);
router.get('/usuarios', _.usuarios);

module.exports = router;