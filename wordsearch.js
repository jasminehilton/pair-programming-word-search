const transpose = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const transposedMatrix = Array.from({ length: cols }, () => new Array(rows));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((letter) => letter.join(""));

  const transposedLetters = transpose(letters);

  const verticalJoin = transposedLetters.map((letter) => letter.join(""));

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
