import { Piece } from './abstract.piece';

export class Knight extends Piece {

    _white_unicode = 'U+2658';
    _white_htmlCode = '&#9816;';

    _black_unicode = 'U+265E';
    _black_htmlCode = '&#9822;';

    constructor(position: string) {
        super(position);
    }
}
