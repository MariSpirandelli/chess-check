import express = require('express');
import cors = require("cors");

import { ChessBoard } from "../models/chess.board";
import { ReturnDTO } from '../models/return.dto';
import { Knight } from '../models/knight';

const board = new ChessBoard();
const regexp = new RegExp('^[A-H][1-8]$');

exports.get = (req:any, res:any) => {
    const position = req.params['position'];
    let test = regexp.test(position);
    if(test) {
        let knight = new Knight(position); 
        let possibleMoves = board.getNextMoves(knight);
        res.status(200).send(new ReturnDTO(null, possibleMoves));
    }else{
        res.status(400).send('Not a valid position');
    }    
};

