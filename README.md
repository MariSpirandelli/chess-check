# chess-check

## Description

This is a simple Angular and NodeJS application which uses RestAPI to make http requests and communicate to each other.

At the moment, the project shows a responsive chess board and highlightes the possible moves of a Knight Chess Piece after the user select its start position and if the user wants, it highlightes all second turn movements possibilities.

## Previous Requirements:

*Frontend:*

 - Node - 10.13.0;
 - NPM - 6.4.1;
 - Angular Cli: npm install -g angular-cli;

*Backend:*
 - Node - 10.13.0;
 - Nodemon: npm install -g nodemon

## Running application:

There are two projects:
A frontend project using Angular, TypeScript and Angular Material and a backend project that uses NodeJs, TypeScript and Express.

*Backend:*

Open a command line editor of you preference and run on root folder (chess-check-server):
```bash 
npm install
```
After that, you just need to run:
```bash 
npm start 
```

It must present you a message: 'Server Started'. By default it runs on port 3000.

*Frontend:*

On a command line editor, open the project on root folder (chess-check-view) and run:
```bash 
npm install
```
After that, you just need to run:
```bash 
ng serve 
```

When it is deployed, open it on your browser: http://localhost:4200/

## Running unit tests:

There are some Unit tests on backend. To run them, the server must be running as it tests requests as well.

Open another command line editor and press the following command:
```
npm test
```
