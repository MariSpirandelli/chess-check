import { Cell } from "./cell";

export class Move {
    private finalCell:Cell;
    private path: Cell[];
    private next: Move[];

    constructor(final:Cell, path:Cell[]){
        this.finalCell = final;
        this.path = path;
        this.next = new Array<Move>();
    }

    public get FinalCell(): Cell{
        return this.finalCell;
    }

    public get Path(): Cell[]{
        return this.path;
    }

    public get NextMovements():Move[]{
        return this.next;
    }

    public appendNextMoves(move: Move[]){
        this.next = this.next.concat(move);
    }

}