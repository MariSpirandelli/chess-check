import { Component, OnInit } from '@angular/core';
import { MoveCheckService } from '../move-check.service';
import { ChessBoard } from 'src/app/shared/models/chess.board';
import { Cell } from 'src/app/shared/models/cell';
import { Knight } from 'src/app/shared/models/knight';
import { Move } from 'src/app/shared/models/move';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private FIRST_TURN_COLOUR = 'first-turn';
  private SECOND_TURN_COLOUR = 'second-turn';

  public board: ChessBoard;
  public selected: Cell;
  public showSecondTurn = false;
  public moves: Move[];

  private knight: Knight;

  constructor(private moveCheckService: MoveCheckService) {
    this.board = new ChessBoard(8, 8);
   }

  ngOnInit() {
  }

  public showMoves() {
    this.board.resetBoard();
    const vm = this;
    this.moveCheckService.getNexKnightMoves(this.selected.id).subscribe({
      next(result) {
        vm.moves = result.list;
        if (vm.moves && vm.moves.length > 0) {
          vm.hightlighMoves.call(vm);
        }
      },
      error(err) {
        console.log('erro');
      }
    });
  }

  public checkChange() {
    this.board.resetBoard();
    this.hightlighMoves();
  }

  public selectedCell(cell: Cell) {
    if (this.selected) {
      this.board.resetBoard();
    }

    this.selected = cell;
    this.highlightSelected();
  }

  private highlightSelected() {
    this.knight = new Knight(this.selected.id);
    this.selected.content = this.knight.blackHtmlCode;
    this.selected.colour = `${this.selected.colour} green`;
  }

  private hightlighMoves() {
    if (this.showSecondTurn) {
      this.moves.forEach(move => this.showNextMoves(move.next, this.SECOND_TURN_COLOUR));
    } else {
      this.highlightSelected();
      this.showNextMoves(this.moves, this.FIRST_TURN_COLOUR);
    }
  }

  public showNextMoves(moves: Move[], colour, showPath = false) {
    this.board.cells.map(r => {
      r.map(c => {
        const nextCell = moves.find(m => m.finalCell.id === c.id);
        if (nextCell) {
          c.colour = colour;
          c.content = this.knight.whiteHtmlCode;
        } else if (showPath) {
          const path = moves.find(m => m.path.find(cel => cel.id === c.id) !== undefined );
          if (path) {
            c.colour = '${colour}-opacity';
          }
        }
      });
    });
  }
}
