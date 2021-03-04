/*
You are given a matrix of integers matrix of size n x m and a list of queries, queries. The given matrix is colored in black and white in a checkerboard style - the top left corner is colored white and any two side-neighboring cells have opposite colors.
Each query is represented as a pair of indices (i, j). For each query, perform the following operations:
- Select the ith - smallest value among the black cells. In case of a tie, select the one with the lowest row number. If there is still a tie, select the one with the lowest column number.
- Select the jth - smallest white cell using the same process.
- Find the average value of these two cells:
  - If the average value is a whole integer, replace both of the select cells with teh found average value
  - Otherwise, replace the cell of the greater value with the average rounded up to the nearest integer, and replace the cell of the smaller value with the average rounded down to the nearest integer.
Your task is to return the resulting matrix after processing all the queries.
Example:
matrix = [[2, 0, 4],
          [2, 8, 5],
          [6, 0, 9],
          [2, 7, 10],
          [4, 3, 4]]
queries = [[0, 0], [1, 3]]
Output:
meanAndChessboard(matrix, queries) = [[1, 2, 4],
                                      [2, 8, 5],
                                      [6, 0, 9],
                                      [2, 7, 10],
                                      [4, 3, 3]]
                                      0: (3) [1, 2, 4]
1: (3) [2, 8, 5]
2: (3) [6, 0, 9]
3: (3) [2, 7, 10]
4: (3) [4, 3, 3]
*/

function meanAndChessboard(matrix, queries) {
  let sortedWhite = [];
  let sortedBlack = [];
  let whiteFirst = true;
  let white = true;
  // iterate over matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (col === matrix[row].length - 1) {
        whiteFirst = !whiteFirst;
      }
      if (col === 0) {
        white = whiteFirst;
      }
      if (white) {
        sortedWhite.push([matrix[row][col], row, col])
        if (sortedWhite.length === 1) {
            white = !white;
            continue;
        }
        let curPos = sortedWhite.length - 1;
        while (curPos && sortedWhite[curPos][0] < sortedWhite[curPos - 1][0]) {
          [sortedWhite[curPos - 1], sortedWhite[curPos]] = [sortedWhite[curPos], sortedWhite[curPos - 1]];
          curPos--
        }
        white = !white;
      } else {
        sortedBlack.push([matrix[row][col], row, col])
        if (sortedBlack.length === 1) {
            white = !white;
          continue;
        }
        let curPos = sortedBlack.length - 1;
        while (curPos && sortedBlack[curPos][0] < sortedBlack[curPos - 1][0]) {
          [sortedBlack[curPos - 1], sortedBlack[curPos]] = [sortedBlack[curPos], sortedBlack[curPos - 1]];
          curPos--
        }
        white = !white;
      }
    }
  }

  function sorter(a, b) {
    return a[0] - b[0];
  }
debugger;
  function queryPooper(query) {
    let blackSmall = sortedBlack[query[0]][0];
    let blackRow = sortedBlack[query[0]][1];
    let blackCol = sortedBlack[query[0]][2];
    let whiteSmall = sortedWhite[query[1]][0];
    let whiteRow = sortedWhite[query[1]][1];
    let whiteCol = sortedWhite[query[1]][2];
    let average = (whiteSmall + blackSmall) / 2;
    if (average % 1 === 0 ) {
      matrix[blackRow][blackCol] = average;
      matrix[whiteRow][whiteCol] = average;
      sortedBlack[query[0]][0] = average;
      sortedWhite[query[1]][1] = average;
      sortedBlack.sort(sorter);
      sortedWhite.sort(sorter);
    } else if (blackSmall > whiteSmall) {
      matrix[blackRow][blackCol] = Math.ceil(average);
      matrix[whiteRow][whiteCol] = Math.floor(average);
      sortedBlack[query[0]][0] = Math.ceil(average);
      sortedWhite[query[1]][1] = Math.floor(average);
      sortedBlack.sort(sorter);
      sortedWhite.sort(sorter);
    } else {
      matrix[blackRow][blackCol] = Math.floor(average);
      matrix[whiteRow][whiteCol] = Math.ceil(average);
      sortedBlack[query[0]][0] = Math.floor(average);
      sortedWhite[query[1]][1] = Math.ceil(average);
      sortedBlack.sort(sorter);
      sortedWhite.sort(sorter);
    }
  }
  for (let i = 0; i < queries.length; i++) {
    queryPooper(queries[i]);
  }
  return matrix;
}

function meanAndChessboard(matrix, queries) {
  let sortedWhite = [];
  let sortedBlack = [];
  let whiteFirst = true;
  let white = true;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (col === matrix[row].length - 1) {
        whiteFirst = !whiteFirst;
      }
      if (col === 0) {
        white = whiteFirst;
      }
      if (white) {
        sortedWhite.push([matrix[row][col], row, col])
        if (sortedWhite.length === 1) {
            white = !white;
            continue;
        }
        let curPos = sortedWhite.length - 1;
        while (curPos && sortedWhite[curPos][0] < sortedWhite[curPos - 1][0]) {
          [sortedWhite[curPos - 1], sortedWhite[curPos]] = [sortedWhite[curPos], sortedWhite[curPos - 1]];
          curPos--
        }
        white = !white;
      } else {
        sortedBlack.push([matrix[row][col], row, col])
        if (sortedBlack.length === 1) {
            white = !white;
          continue;
        }
        let curPos = sortedBlack.length - 1;
        while (curPos && sortedBlack[curPos][0] < sortedBlack[curPos - 1][0]) {
          [sortedBlack[curPos - 1], sortedBlack[curPos]] = [sortedBlack[curPos], sortedBlack[curPos - 1]];
          curPos--
        }
        white = !white;
      }
    }
  }

  function sorter(a, b) {
    return a[0] - b[0];
  }
debugger;
  function queryPooper(query) {
    while (query[0] && sortedBlack[query[0]][0] === sortedBlack[query[0] - 1][0]) {
      query[0] = query[0] - 1;
    }
    while (query[1] && sortedWhite[query[1]][0] === sortedWhite[query[1] - 1][0]) {
      query[1] = query[1] - 1;
    }
    let blackSmall = sortedBlack[query[0]][0];
    let blackRow = sortedBlack[query[0]][1];
    let blackCol = sortedBlack[query[0]][2];
    let whiteSmall = sortedWhite[query[1]][0];
    let whiteRow = sortedWhite[query[1]][1];
    let whiteCol = sortedWhite[query[1]][2];
    let average = (whiteSmall + blackSmall) / 2;
    if (average % 1 === 0 ) {
      matrix[blackRow][blackCol] = average;
      matrix[whiteRow][whiteCol] = average;
      sortedBlack[query[0]][0] = average;
      sortedWhite[query[1]][1] = average;
      sortedBlack.sort(sorter);
      sortedWhite.sort(sorter);
    } else if (blackSmall > whiteSmall) {
      matrix[blackRow][blackCol] = Math.ceil(average);
      matrix[whiteRow][whiteCol] = Math.floor(average);
      sortedBlack[query[0]][0] = Math.ceil(average);
      sortedWhite[query[1]][1] = Math.floor(average);
      sortedBlack.sort(sorter);
      sortedWhite.sort(sorter);
    } else {
      matrix[blackRow][blackCol] = Math.floor(average);
      matrix[whiteRow][whiteCol] = Math.ceil(average);
      sortedBlack[query[0]][0] = Math.floor(average);
      sortedWhite[query[1]][1] = Math.ceil(average);
      debugger;
      sortedBlack.sort(sorter);
      sortedWhite.sort(sorter);
    }
  }
  for (let i = 0; i < queries.length; i++) {
    queryPooper(queries[i]);
  }
  console.log(sortedBlack)
  return matrix;
}