# Chess Game API

Codificação em Node com Typescript para uma API REST para um jogo de xadrez. A API permite criar um novo jogo e fazer movimentos. Os movimentos são armazenados no AWS DynamoDB.

## Tecnologias

- Node.js
- Express
- TypeScript
- AWS DynamoDB

## Instalação

1. Clone este repositório
2. Instale as dependências com `npm install`
3. Configure suas variáveis de ambiente no arquivo `.env` (veja a seção Variáveis de Ambiente abaixo)
4. Inicie o servidor com `npm start`

## Variáveis de Ambiente

As seguintes variáveis de ambiente são necessárias para a aplicação:

- `AWS_ACCESS_KEY_ID`: sua chave de acesso AWS
- `AWS_SECRET_ACCESS_KEY`: sua chave secreta AWS
- `AWS_REGION`: a região AWS onde seu DynamoDB está hospedado

## Endpoints

- `POST /game`: Cria um novo jogo e retorna o ID do jogo.
- `POST /game/:gameId/move`: Faz um movimento no jogo especificado pelo `gameId`.

## Serviços

- `dynamoService`: Responsável pela interação com o DynamoDB.
- `eventService`: Responsável pela gestão de eventos na aplicação.

## Contribuindo

Pull requests são bem-vindos. Para mudanças importantes, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.
