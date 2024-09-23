interface IColRow {
    col: number;
    row: number;
}

export default class Grid {
    grid: number[][];

    constructor(cols: number, rows: number) {
        const newGrid = new Array(cols);

        for (let col = 0; col < cols; col++) {
            newGrid[col] = new Array(rows).fill(0);
        }

        this.grid = newGrid;
    }

    dump() {
        console.table(this.grid);
    }

    set(colRows: IColRow, value: number): void;
    set(col: number, value: number, row: number): void;

    set(param1: IColRow | number, value: number, param2?: number) {
        let col;
        let row;

        if (typeof param1 === "object") {
            col = param1.col;
            row = param1.row;
        } else if (typeof param1 === "number" && typeof param2 === "number") {
            const colRow = this.paramConversion(param1, param2);

            col = colRow.col;
            row = colRow.row;
        } else {
            throw new Error("Incorrect arguments");
        }

        const cell = this.grid[col][row];

        if (typeof cell === "number") {
            this.grid[col][row] = value;
        }
    }

    get() {
        //TODO
    }

    indexFor() {
        //TODO
    }

    rowColFor() {
        //TODO
    }

    neighbours() {
        //TODO
    }

    neighbourValues() {
        //TODO
    }

    nextInRow() {
        //TODO
    }

    nextInCol() {
        //TODO
    }

    north() {
        //TODO
    }

    south() {
        //TODO
    }

    west() {
        //TODO
    }

    east() {
        //TODO
    }

    rows() {
        //TODO
    }

    cols() {
        //TODO
    }

    size() {
        //TODO
    }

    fill() {
        //TODO
    }

    paramConversion(col: number, row: number): IColRow;
    paramConversion(colRow: IColRow): IColRow;

    paramConversion(param1: number | IColRow, param2?: number) {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return { col: param1, row: param2 };
        } else if (typeof param1 === "object") {
            return param1 as IColRow;
        }
        throw new Error("Invalid conversion arguments");
    }
}
