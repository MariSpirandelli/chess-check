import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReturnDTO } from 'src/app/shared/models/return.dto';
import { ChessConstants } from 'src/app/utils/chess.constants';

@Injectable()
export class MoveCheckService {

  private restUrl: string;

  constructor(private http: HttpClient) {
    this.restUrl = `${ChessConstants.BASE_URL}/knight`;
  }

  getNexKnightMoves(position: string): Observable<ReturnDTO> {
    const nextMovesUrl = `${this.restUrl}/${position}`;
    return this.http.get<any>(nextMovesUrl);
  }
}
