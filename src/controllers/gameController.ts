import eventService from "../services/eventService";

import { Request, Response } from 'express';
import dynamoService from '../services/dynamoService';

export const createGame = async (req: Request, res: Response) => {
  const gameId = await dynamoService.createGame();
  res.json({ gameId });
};

export const makeMove = async (req: Request, res: Response) => {
  const { gameId } = req.params;
  const { move } = req.body;
  
  
  eventService.emit('moveMade', { gameId, move });
  res.json({ message: 'Move made' });
};

