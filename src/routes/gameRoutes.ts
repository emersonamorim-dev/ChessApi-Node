import express from 'express';
import * as gameController from '../controllers/gameController';

const router = express.Router();

router.post('/', gameController.createGame);
router.post('/:gameId/move', gameController.makeMove);

export default router;
