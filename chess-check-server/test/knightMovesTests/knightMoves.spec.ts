import { ChessBoard } from '../../app/src/models/chess.board';
import {Knight} from '../../app/src/models/knight';
import { expect } from 'chai';
import 'mocha';

describe('Knight Move Check', function () {
    beforeEach("", function(){
        this.knight = new Knight("A8");
        this.board = new ChessBoard();
        this.possibleMoves = this.board.getNextMoves(this.knight);
    });

    it("Check possible moves on first turn", function(done){        
        expect(this.possibleMoves.length).to.equals(2);
        expect(this.possibleMoves[0].finalCell.id).to.equals("B6");
        expect(this.possibleMoves[1].finalCell.id).to.equals("C7");
        done();      
    });

    it("Check the path to a move on first turn", function(done){        
        let path = this.possibleMoves[0].path;
        expect(path[0].id).to.equals("A7");
        expect(path[1].id).to.equals("A6");
        expect(path[2].id).to.equals("B6");
        done();      
    });
});