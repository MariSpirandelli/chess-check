import { Move } from "./move";
import { ChessBoard } from "./chess.board";

export abstract class Piece {

    protected abstract _currentPosition: string;
    protected abstract _verticallyMoves: number[]; 
    protected abstract _horizontallyMoves: number[];

    constructor () {
    }

    public get currentPosition(): string {
        return this._currentPosition;
    }

    public set currentPosition(position: string) {
        this._currentPosition = position;
    }

    public get verticallyMoves(): number[] {
        return this._verticallyMoves;
    }

    public set verticallyMoves(moves: number[]) {
        this._verticallyMoves = moves;
    }

    public get horizontallyMoves(): number[] {
        return this._verticallyMoves;
    }

    public set horizontallyMoves(moves: number[]) {
        this._verticallyMoves = moves;
    }

    public abstract nextPossibleMoves(turns: number, board: ChessBoard):Move[];
}
