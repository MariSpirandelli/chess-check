import express = require('express');
import cors = require("cors");

import { ChessBoard } from "../models/chess.board";
import { ReturnDTO } from '../models/return.dto';
import { Knight } from '../models/knight';

const board = new ChessBoard();

exports.get = (req:any, res:any) => {
    const position = req.params['position'];
    let knight = new Knight(position);
    
    let possibleMoves = board.getNextMoves(knight);

    res.send(new ReturnDTO(null, possibleMoves));
};

