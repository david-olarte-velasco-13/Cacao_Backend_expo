import {Router} from 'express';
const router = Router();


import * as registroCtrl from './registro.controllers'

router.get('/registro', registroCtrl.getRegistros);

router.get('/registro/:id', registroCtrl.getRegistro);

router.post('/registro', registroCtrl.createRegistro);

router.delete('/registro/:id', registroCtrl.deleteRegistro);

router.put('/registro/:id', registroCtrl.updateRegistro);

export default router;