import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardComponent } from './components/board/board.component';
import { MoveCheckService } from './components/move-check.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ BoardComponent ],
  providers: [ MoveCheckService ]
})
export class ChessModule { }
