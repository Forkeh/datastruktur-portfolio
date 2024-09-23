import Grid from "./grid";

console.log("RUNNING GRID TESTS");

const COLS = 5;
const ROWS = 3;

const grid = new Grid(COLS, ROWS);

const colRow = { col: 4, row: 2 };

grid.dump();
grid.set(colRow, 1);
grid.set(4, 1, 1);
grid.dump();
console.log(grid.get(colRow));
console.log(grid.get(2, 2));
grid.dump();
console.log("Cols:", grid.cols());
console.log("Rows:", grid.rows());
