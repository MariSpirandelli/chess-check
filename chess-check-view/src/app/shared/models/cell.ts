
export class Cell {
    public content: string;
    public colour: string;
    public id: string;

    constructor(id: string, colour: string) {
        this.id = id;
        this.colour = colour;
    }
}
