const { Router } = require('express');
const router = Router();

const anuncioWebMotorsController = require('../controllers/anuncioWebMotorsController');


router.get('/', anuncioWebMotorsController.findAll);
router.post('/',anuncioWebMotorsController.create);
router.put('/',anuncioWebMotorsController.update);
router.delete('/', anuncioWebMotorsController.destroy);

module.exports = router;