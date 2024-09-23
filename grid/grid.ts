interface IColRow {
    row: number;
    col: number;
}

export default class Grid {
    grid: number[][];

    constructor(rows: number, cols: number) {
        const newGrid = new Array(rows);

        for (let row = 0; row < newGrid.length; row++) {
            newGrid[row] = new Array(cols).fill(0);
        }
        console.log(newGrid);

        this.grid = newGrid;
    }

    dump() {
        console.table(this.grid);
    }

    set(colRows: IColRow, value: number): void;
    set(row: number, value: number, col: number): void;

    set(param1: IColRow | number, value: number, param2?: number): void {
        const { row, col } = this.paramConversion(param1, param2);

        const cell = this.grid[row][col];

        if (typeof cell === "number") {
            this.grid[row][col] = value;
        }
    }

    get(param1: IColRow | number, param2?: number): number {
        const { row, col } = this.paramConversion(param1, param2);

        return this.grid[row][col];
    }

    // TODO: Hvad menes der præcis med den her, hvad skal returneres?
    indexFor(param1: IColRow | number, param2?: number) {
        const { row, col } = this.paramConversion(param1, param2);
        
        if (row > this.rows() - 1 || col > this.cols() - 1) return;

        return row * this.cols() + col;
    }

    rowColFor(index: number) {
        if (index > this.size() - 1) return;

        const numCols = this.cols(); // Get the number of columns in the grid
        const row = Math.floor(index / numCols); // Calculate the row number
        const col = index % numCols; // Calculate the column number
        return { row, col };
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
        return this.grid.length;
    }

    cols() {
        return this.grid[0].length;
    }

    size() {
        let size = 0;
        for (let i = 0; i < this.grid.length; i++) {
            size += this.grid[i].length;
        }
        return size;
    }

    fill(value: number) {
        for (let col = 0; col < this.grid.length; col++) {
            for (let row = 0; row < this.grid[col].length; row++) {
                this.grid[col][row] = value;
            }
        }
    }

    paramConversion(param1: number | IColRow, param2?: number) {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return { row: param1, col: param2 };
        } else if (typeof param1 === "object") {
            return param1 as IColRow;
        }
        throw new Error("Invalid conversion arguments");
    }
}
