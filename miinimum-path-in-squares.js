function minPath(grid, x, y) {
    const result = [...Array(grid.length).keys()].map(i => Array(grid.length).fill(0));
    result[0][0] = grid[0][0];

    for (let i = 1; i <= x; i++) {
        result[0][i] = grid[0][i] + result[0][i - 1];
    }
    for (let i = 1; i <= y; i++) {
        result[i][0] = grid[i][0] + result[i - 1][0];
    }

    for (let i = 1; i <= y; i++) {
        for (let j = 1; j <= x; j++) {
            result[i][j] = grid[i][j] + Math.min(result[i - 1][j], result[i][j - 1])
        }
    }
    return result[y][x];
}