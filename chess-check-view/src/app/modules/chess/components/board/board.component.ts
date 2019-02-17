import { Component, OnInit } from '@angular/core';
import { MoveCheckService } from '../move-check.service';
import { ChessBoard } from 'src/app/shared/models/chess.board';
import { Cell } from 'src/app/shared/models/cell';
import { Knight } from 'src/app/shared/models/knight';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public board: ChessBoard;
  private knight: Knight;
  private lastSelected: Cell;

  constructor(private moveCheckService: MoveCheckService) {
    this.board = new ChessBoard(8, 8);
   }

  ngOnInit() {
  }

  public selectedCell(cell: Cell) {

    this.moveCheckService.getNexKnightMoves(cell.id).subscribe({
      next(result) {
        this.showNextMoves(result.list);
      },
      error(err) {
        console.log('erro');
      }
    });

    // if (this.lastSelected) {
    //   this.board.cells.map(r => {
    //     r.map(c => {
    //       if (c.id === this.lastSelected.id ) {
    //       c.content = '';
    //       }
    //     });
    //   });
    // }

    this.lastSelected = cell;
    this.knight = new Knight(cell.id);
    cell.content = cell.colour === 'black' ? this.knight.whiteHtmlCode : this.knight.blackHtmlCode;
    cell.colour = 'green';
  }

  public showNextMoves(moves) {
    this.board.cells.map(r => {
      r.map(c => {
        if (c.id === this.lastSelected.id ) {
        c.colour = 'green';
        }
      });
    });
  }

}
