export abstract class Piece {

    protected _currentPosition: string;
    protected abstract _white_unicode: string;
    protected abstract _white_htmlCode: string;
    protected abstract _black_unicode: string;
    protected abstract _black_htmlCode: string;

    constructor(currentPosition: string) {
        this._currentPosition = currentPosition;
    }

    public get currentPosition(): string {
        return this._currentPosition;
    }

    public set currentPosition(position: string) {
        this._currentPosition = position;
    }

    public get whiteUnicode() {
        return this._white_unicode;
    }

    public get whiteHtmlCode() {
        return this._white_htmlCode;
    }

    public get blackUnicode() {
        return this._black_unicode;
    }

    public get blackHtmlCode() {
        return this._black_htmlCode;
    }
}
