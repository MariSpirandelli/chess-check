import { Cell } from './cell';

export class Move {
    public finalCell: Cell;
    public path: Cell[];
    public next: Move[];

    constructor(final: Cell, path: Cell[]) {
        this.finalCell = final;
        this.path = path;
        this.next = new Array<Move>();
    }

}
