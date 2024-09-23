interface IColRow {
    col: number;
    row: number;
}

export default class Grid {
    grid: number[][];

    constructor(cols: number, rows: number) {
        const newGrid = new Array(cols);

        for (let col = 0; col < newGrid.length; col++) {
            newGrid[col] = new Array(rows).fill(0);
        }
        console.log(newGrid);

        this.grid = newGrid;
    }

    dump() {
        console.table(this.grid);
    }

    set(colRows: IColRow, value: number): void;
    set(col: number, value: number, row: number): void;

    set(param1: IColRow | number, value: number, param2?: number): void {
        const { col, row } = this.paramConversion(param1, param2);

        const cell = this.grid[col][row];

        if (typeof cell === "number") {
            this.grid[col][row] = value;
        }
    }

    get(param1: IColRow | number, param2?: number): number {
        const { col, row } = this.paramConversion(param1, param2);

        return this.grid[col][row];
    }

    indexFor(param1: IColRow | number, param2?: number) {
        const { col, row } = this.paramConversion(param1, param2);

        const index = row;
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
        // TODO: Is this correct?
        // let rows = 0;
        // for (let i = 0; i < this.grid.length; i++) {
        //     rows += this.grid[i].length;
        // }
        // return rows;
        return this.grid[0].length;
    }

    cols() {
        return this.grid.length;
    }

    size() {
        let size = 0;
        for (let i = 0; i < this.grid.length; i++) {
            size += this.grid[i].length;
        }
        return size;
    }

    fill() {
        //TODO
    }

    paramConversion(param1: number | IColRow, param2?: number) {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return { col: param1, row: param2 };
        } else if (typeof param1 === "object") {
            return param1 as IColRow;
        }
        throw new Error("Invalid conversion arguments");
    }
}
