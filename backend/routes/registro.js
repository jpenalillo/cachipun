const express = require('express');
const router = express.Router();
const {getRegistro,getById,crearRegistro,updateRegistro, crearMovimiento} = require('../controllers/registroController');
router.get('/',getRegistro);
router.get('/:ID',getById);
router.post('/crear',crearRegistro);
router.post('/crearMov',crearMovimiento);
router.post('/update/:ID/:IDGAME',updateRegistro);
module.exports = router;