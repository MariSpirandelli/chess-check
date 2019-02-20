import { Cell } from './cell';

export class ChessBoard {

    private cellsColours = ['white', 'black'];

    public cells: Cell[][];
    public column = Array.from({ length: 8 }, (v, k) => k).map(i => String.fromCharCode(i + 65));

    constructor(rows: number, columns: number) {
        this.cells = new Array<Array<Cell>>();
        for (let i = rows; i > 0; i--) {
            const row: Cell[]  = new Array<Cell>();
            for (let j = 0; j < columns; j++) {
                const id = `${this.column[j]}${i}`;
                const colour = this.cellsColours[(j + i) % 2];
                row.push(new Cell(id, colour));
            }
            this.cells.push(row);
        }
    }

    public resetBoard() {
        this.cells.map((r, i) => {
            r.map((c, j) => {
                c.colour = this.cellsColours[(j + i) % 2];
                c.content = '';
                });
            });
    }
}
