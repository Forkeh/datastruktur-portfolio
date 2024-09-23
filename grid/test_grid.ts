import Grid from "./grid";

console.log("RUNNING GRID TESTS");

const COLS = 5;
const ROWS = 3;

const grid = new Grid(COLS, ROWS);

const colRow = { col: 4, row: 2 };

grid.dump();
grid.set(colRow, 1);
grid.set(2, 1, 2);
grid.dump();
