import { Cell } from './cell';
import { Piece } from './abstract.piece';

export class ChessBoard {

    public static columns = Array.from({ length: 8 }, (v, k) => k).map(i => String.fromCharCode(i + 65));
    private static rows = Array.from({ length: 8 }, (v,k) => k);

    constructor () {
    }

    public getNextMoves(piece:Piece){
        return piece.nextPossibleMoves(2, this);
    }

    public getRowIndex(position:string):number {
        return Number.parseInt(position[1]) - 1;
    }

    public getColumnIndex(position:string):number {
        return ChessBoard.columns.findIndex(c=> c === position[0]);
    }

}