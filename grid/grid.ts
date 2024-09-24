interface IRowCol {
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

    set(colRows: IRowCol, value: number): void;
    set(row: number, value: number, col: number): void;

    set(param1: IRowCol | number, value: number, param2?: number): void {
        const { row, col } = this.paramConversion(param1, param2);

        const cell = this.grid[row][col];

        if (typeof cell === "number") {
            this.grid[row][col] = value;
        }
    }

    get(param1: IRowCol | number, param2?: number) {
        const { row, col } = this.paramConversion(param1, param2);

        if (row > this.rows() - 1 || col > this.cols() - 1) return undefined;

        return this.grid[row][col];
    }

    // TODO: Hvad menes der præcis med den her, hvad skal returneres?
    indexFor(param1: IRowCol | number, param2?: number) {
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

    neighbours(param1: IRowCol | number, param2?: number) {
        const { row, col } = this.paramConversion(param1, param2);
        const neighbours = [];

        // TODO: Can code be made smarter with less loops?
        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                if (!(x === 0 && y === 0)) {
                    const index = this.indexFor(row + y, col + x);

                    if (index) {
                        const rowColObj = this.rowColFor(index);
                        neighbours.push(rowColObj);
                    }
                }
            }
        }
        console.log("neighbours", neighbours);
        return neighbours;
    }

    neighbourValues(param1: IRowCol | number, param2?: number) {
        const { row, col } = this.paramConversion(param1, param2);

        const neighbours = this.neighbours(row, col);
        const neighboursValues = [];

        // TODO: Can code be made smarter with less loops?
        for (let i = 0; i < neighbours.length; i++) {
            const current = neighbours[i];
            const value = this.get(current!.row, current?.col);
            neighboursValues.push(value);
        }
        console.log("neighbour values:", neighboursValues);
        return neighboursValues;
    }

    nextInRow(param1: IRowCol | number, param2?: number) {
        const { row, col } = this.paramConversion(param1, param2);

        const value = this.get(row + 1, col);

        if (value) {
            return { row: row + 1, col, value };
        } else {
            return undefined;
        }
    }

    nextInCol(param1: IRowCol | number, param2?: number) {
        const { row, col } = this.paramConversion(param1, param2);

        const value = this.get(row, col + 1);

        if (value) {
            return { row, col: col + 1, value };
        } else {
            return undefined;
        }
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
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                this.grid[row][col] = value;
            }
        }
    }

    paramConversion(param1: number | IRowCol, param2?: number) {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return { row: param1, col: param2 };
        } else if (typeof param1 === "object") {
            return param1 as IRowCol;
        }
        throw new Error("Invalid conversion arguments");
    }
}
