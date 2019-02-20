import { Piece } from './abstract.piece';
import { Cell } from './cell';
import { ChessBoard } from './chess.board';
import { Move } from './move';

export class Knight extends Piece {
    
    _currentPosition: string;

    // All possible moves of a knight
    _verticallyMoves = [2, 1, -1, -2, -2, -1, 1, 2 ]; 
    _horizontallyMoves = [1, 2, 2, 1, -1, -2, -2, -1]; 

    constructor(currentPosition: string) {
        super();
        this._currentPosition = currentPosition;
    }

    // calculates all next possible moves of a Knight from the current position
    public nextPossibleMoves(turns:number, board:ChessBoard): Move[]{
        const currRow = board.getRowIndex(this._currentPosition);
        const currColumn  = board.getColumnIndex(this._currentPosition);
        let possibleMoves = this.findMoves(currRow, currColumn);
        
        for(let i=0; i< possibleMoves.length; i++){
            let finalCell = possibleMoves[i].FinalCell;
            const nextRow = board.getRowIndex(finalCell.id);
            const nextColumn  = board.getColumnIndex(finalCell.id);
            let next = this.findMoves(nextRow, nextColumn);
            possibleMoves[i].appendNextMoves(next);
        }
        return possibleMoves;
    }

    // find all the final positions and the path to it
    private findMoves(currRow:number, currColumn:number): Move[]{
        let possibleMoves = new Array<Move>();
        for(let i= 0; i<8; i++){
            // Position of knight after move 
            let x = currRow + this._horizontallyMoves[i]; 
            let y = currColumn + this._verticallyMoves[i]; 
  
            // check position 
            if (x >= 0 && y >= 0 && x < 8 && y < 8){
                let path = this.findPath(currRow, currColumn, this._horizontallyMoves[i], this._verticallyMoves[i]);
                let id = `${ChessBoard.columns[y]}${x+1}`;
                possibleMoves.push(new Move(new Cell(id), path));
            }                 
        }

        return possibleMoves;
    }

    // find out the path for the given final position and the movements
    private findPath(currRow:number, currColumn:number, verticallyMoves: number, horizontallyMoves:number): Cell[]{
        let path = new Array<Cell>();
        let column = currColumn;
        let row = currRow;
        if( Math.abs(horizontallyMoves) == 2){
            for(let i=1; i<= 2; i++){
                column +=  (Math.sign(horizontallyMoves))
                let id = `${ChessBoard.columns[column]}${row+1}`;
                path.push(new Cell(id));
            }
            
            row += (Math.sign(verticallyMoves))
            let id = `${ChessBoard.columns[column]}${row+1}`;
            path.push(new Cell(id));
            
        }else{
            for(let i=1; i<= 2; i++){
                row += (Math.sign(verticallyMoves))
                let id = `${ChessBoard.columns[column]}${row+1}`;
                path.push(new Cell(id));
            }
            
            column +=  (Math.sign(horizontallyMoves))
            let id = `${ChessBoard.columns[column]}${row+1}`;
            path.push(new Cell(id));
            
        }
        return path;
    }
}
