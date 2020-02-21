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
router.get('/locaciones/:suer', _.locaciones);
router.get('/usuarios/:user', _.usuarios);
router.get('/dashboard/:user', _.dashboard);
router.get('/static/:asset', _.static);
router.post('/test', _.test);
router.get('/marijoe/:user', _.marijoe);
router.get('/instalar', _.instalar);
router.get('/TravelSolutionsSetup.exe', _.app);
router.get('/solicitud', _.solicitud);
router.get('/enviada', function(req, reply) { reply.render("enviada") });
router.get('/patrocinadores/:user', _.patrocinadores);
router.get('/editar/:user', _.editar);

module.exports = router;
