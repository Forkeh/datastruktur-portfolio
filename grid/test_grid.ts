import Grid from "./grid";

console.log("RUNNING GRID TESTS");

const COLS = 5;
const ROWS = 3;

const grid = new Grid(ROWS, COLS);

const colRow = { col: 3, row: 0 };

grid.dump();
grid.set(colRow, 1);
grid.set(2, 1, 4);
grid.dump();
console.log(grid.get(colRow));
console.log(grid.get(2, 4));
grid.dump();
console.log("Cols:", grid.cols());
console.log("Rows:", grid.rows());
console.log("Size:", grid.size());
console.log("IndexFor:", grid.indexFor(2, 4));
console.log("rowColFor", grid.rowColFor(14));
// grid.fill(3);
grid.neighbours(1, 3);
grid.neighbourValues(1, 3);
grid.dump();
console.log(grid.get(2, 5));
console.log("Rows:", grid.rows());
console.log("Cols:", grid.cols());
console.log("nextInRow:", grid.nextInRow(2, 4));
console.log("nextInCol:", grid.nextInCol(2, 3));