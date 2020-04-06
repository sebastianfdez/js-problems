export var testCases = [
  {
    grid: [[0, 1, -1],
          [1, 0, -1],
          [1, 1,  1]],
    expected: 5,
  },
  {
    grid: [[0, 1, -1, 0],
          [1, 0, 1, 1],
          [0, 0, 1, 0],
          [0, 1, 1, 0]],
    expected: 6,
  },
  {
    grid: [[0, 1, -1, 0, 1],
          [1, 0, 1, 1, 1],
          [0, 0, 1, 0, 1],
          [0, 1, 1, 0, 1],
          [0, 1, 0, 0, 1]],
    expected: 10,
  },
  {
    grid: [[0]],
    expected: 0,
  },
  {
    grid: [[-1]],
    expected: 0,
  },
  {
    grid: [[1]],
    expected: 1,
  },
  {
    grid: [[1,1,-1],
          [1,-1,1],
          [-1,1,1]],
    expected: 0,
  },
  {
    grid: [[1,1,1,1,0,0,0],
          [0,0,0,1,0,0,0],
          [0,0,0,1,0,0,1],
          [1,0,0,1,0,0,0],
          [0,0,0,1,0,0,0],
          [0,0,0,1,0,0,0],
          [0,0,0,1,1,1,1]],
    expected: 15,
  },
  {
    grid: [[1,1,-1,1,1],
          [1,1,1,1,1],
          [-1,1,1,-1,-1],
          [0,1,1,-1,0],
          [1,0,-1,1,0]],
    expected: 0,
  },
  {
    grid: [[1,1,-1,1,1,1,0,1,1,-1,-1,1,1,-1,1,1,1,1,0,1],[1,1,1,0,1,1,0,1,0,1,-1,1,1,1,1,1,1,0,1,1],[1,1,1,1,1,1,1,0,1,1,-1,-1,-1,1,1,1,-1,1,-1,1],[1,1,1,-1,0,1,1,1,1,1,1,1,1,0,1,-1,-1,1,1,1],[1,-1,-1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,1,1,1,1,1,-1,1,1,0,1,1,1,1,1,1,1],[0,1,1,-1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,-1,1,1,1,-1,1,0,1,1,1,1,1,1,-1,1,1,1,1],[0,-1,1,1,1,-1,1,1,1,-1,1,1,1,1,1,1,-1,1,1,1],[1,1,-1,1,1,1,0,1,1,1,1,0,1,1,-1,0,1,0,-1,1],[0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,-1,0],[1,1,1,1,1,1,-1,1,0,1,1,1,1,-1,1,1,1,0,1,1],[1,1,1,1,-1,-1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,1],[-1,1,1,1,1,-1,1,1,1,1,1,1,-1,1,0,0,1,0,1,1],[0,1,-1,1,1,-1,1,1,1,-1,1,1,1,1,1,1,0,-1,1,1],[1,1,1,-1,1,1,1,-1,1,-1,1,1,1,1,1,1,1,1,1,-1],[1,-1,1,1,1,1,1,1,1,1,0,-1,1,1,1,1,1,1,1,-1],[1,1,1,-1,0,1,0,1,1,0,1,1,1,1,1,1,-1,0,1,1],[1,1,-1,0,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,-1,0,1],[-1,0,0,1,1,1,1,1,-1,-1,1,1,1,0,1,0,0,1,-1,1]],
    expected: 71,
  }
];