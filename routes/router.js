const { Router } = require("express");
const _ = require("../controllers/main");

const router = Router();

router.get('/', _.root);
router.post('/auth', _.auth);

router.get('/conferencistas/:user', _.conferencistas);
router.get('/congreso/:user', _.congreso);
router.get('/docs/:user', _.docs);
router.get('/eventos/:user', _.eventos);
router.get('/sedes/:user', _.sedes);
router.get('/usuarios/:user', _.usuarios);
router.get('/dashboard/:user', _.dashboard);
router.get('/static/:asset', _.static);
router.post('/test', _.test);
router.get('/marijoe/:user', _.marijoe);
module.exports = router;
