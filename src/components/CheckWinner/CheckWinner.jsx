import { NUM_COLUMNS, NUM_ROWS } from "../../constants";

const CheckWinner = (board, counter) => {
  const boardCheck = board.slice();

  for (let rowIndex = 0; rowIndex < NUM_ROWS; rowIndex++) {
    // check for horz combinations
    const c0 = boardCheck[0][rowIndex];
    const c1 = boardCheck[1][rowIndex];
    const c2 = boardCheck[2][rowIndex];
    const c3 = boardCheck[3][rowIndex];
    const c4 = boardCheck[4][rowIndex];
    const c5 = boardCheck[5][rowIndex];
    const c6 = boardCheck[6][rowIndex];

    if (
      (c0 && c0 === c1 && c0 === c2 && c0 === c3) ||
      (c1 && c1 === c2 && c1 === c3 && c1 === c4) ||
      (c2 && c2 === c3 && c2 === c4 && c2 === c5) ||
      (c3 && c3 === c4 && c3 === c5 && c3 === c6)
    ) {
      console.log(`winner! won by horizontal line`);
      return counter ? "red" : "yellow";
    }
  }

  for (let colIndex = 0; colIndex < NUM_COLUMNS; colIndex++) {
    // check for vertLine
    const r0 = boardCheck[colIndex][0];
    const r1 = boardCheck[colIndex][1];
    const r2 = boardCheck[colIndex][2];
    const r3 = boardCheck[colIndex][3];
    const r4 = boardCheck[colIndex][4];
    const r5 = boardCheck[colIndex][5];

    if (
      (r0 && r0 === r1 && r0 === r2 && r0 === r3) ||
      (r1 && r1 === r2 && r1 === r3 && r1 === r4) ||
      (r2 && r2 === r3 && r3 === r4 && r4 === r5)
    ) {
      console.log(`winner! won by vert line`);
      return counter ? "red" : "yellow";
    }
  }

  // check for diagLineSWNE

  for (let colIndex = 0; colIndex < 4; colIndex++) {
    const d0 = boardCheck[colIndex][0];
    const d1 = boardCheck[colIndex + 1][1];
    const d2 = boardCheck[colIndex + 2][2];
    const d3 = boardCheck[colIndex + 3][3];

    const e0 = boardCheck[colIndex][1];
    const e1 = boardCheck[colIndex + 1][2];
    const e2 = boardCheck[colIndex + 2][3];
    const e3 = boardCheck[colIndex + 3][4];

    const f0 = boardCheck[colIndex][2];
    const f1 = boardCheck[colIndex + 1][3];
    const f2 = boardCheck[colIndex + 2][4];
    const f3 = boardCheck[colIndex + 3][5];

    if (
      (d0 && d0 === d1 && d0 === d2 && d0 === d3) ||
      (e0 && e0 === e1 && e0 === e2 && e0 === e3) ||
      (f0 && f0 === f1 && f0 === f2 && f0 === f3)
    ) {
      console.log(`winner! won by diagonal line SWNE`);
      alert(`player ${d3 || e3 || f3} has won!`);
      return counter ? "red" : "yellow";
    }
  }

  // check for diagLineNWSE
  for (let colIndex = 6; colIndex > 2; colIndex--) {
    // check for vertLine
    const g0 = boardCheck[colIndex][0];
    const g1 = boardCheck[colIndex - 1][1];
    const g2 = boardCheck[colIndex - 2][2];
    const g3 = boardCheck[colIndex - 3][3];

    const h0 = boardCheck[colIndex][1];
    const h1 = boardCheck[colIndex - 1][2];
    const h2 = boardCheck[colIndex - 2][3];
    const h3 = boardCheck[colIndex - 3][4];

    const i0 = boardCheck[colIndex][2];
    const i1 = boardCheck[colIndex - 1][3];
    const i2 = boardCheck[colIndex - 2][4];
    const i3 = boardCheck[colIndex - 3][5];

    if (
      (g0 && g0 === g1 && g0 === g2 && g0 === g3) ||
      (h0 && h0 === h1 && h0 === h2 && h0 === h3) ||
      (i0 && i0 === i1 && i0 === i2 && i0 === i3)
    ) {
      console.log(`winner! won by diagonal line NWSE`);
      return counter ? "red" : "yellow";
    }
  }
};
export default CheckWinner;
