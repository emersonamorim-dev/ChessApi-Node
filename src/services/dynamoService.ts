import { DynamoDB } from 'aws-sdk';
import { Game } from '../models/gameModel';

const dynamoDb = new DynamoDB.DocumentClient({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const createGame = async (): Promise<string> => {
  const gameId = 'some unique id'; 
  
  const params = {
    TableName: 'chessGames',
    Item: {
      gameId,
      moves: [],
    },
  };
  
  await dynamoDb.put(params).promise();
  
  return gameId;
};

const updateGame = async (game: Game) => {
  const params = {
    TableName: 'chessGames',
    Key: { gameId: game.gameId },
    UpdateExpression: 'set moves = :moves',
    ExpressionAttributeValues: {
      ':moves': game.moves,
    },
  };
  
  await dynamoDb.update(params).promise();
};

const dynamoService = {
  createGame,
  updateGame
};

export default dynamoService;


