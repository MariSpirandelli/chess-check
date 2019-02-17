import { Cell } from "./cell";

export class Move {
    private _finalCell:Cell;
    private _path: Cell[];
    private _next: Move[];

    constructor(final:Cell, path:Cell[]){
        this._finalCell = final;
        this._path = path;
        this._next = new Array<Move>();
    }

    public get finalCell(): Cell{
        return this._finalCell;
    }

    public get path(): Cell[]{
        return this._path;
    }

    public get nextMovements():Move[]{
        return this._next;
    }

    public appendNextMoves(move: Move[]){
        this._next = this._next.concat(move);
    }

}