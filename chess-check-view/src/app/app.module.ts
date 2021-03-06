import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MoveCheckService } from './modules/chess/components/move-check.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './routes/app.routes.module';
import { BoardComponent } from './modules/chess/components/board/board.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutesModule,
    SharedModule.forRoot()
  ],
  providers: [MoveCheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
