const BREAK_LINE = '\n';
const SPACE = ' ';

const compass = (n) => {
  const FULL_LINE = '#'.repeat(n) + BREAK_LINE;
  let triangle = '';
  let emptyTriangle = '';
  let side = 0;


  for (i = 0; i < Math.floor(n / 2); i++) {
    if (i <= Math.floor(n / 2)) {
      triangle += '#' + SPACE.repeat(i) + '#'.repeat(n - (2 + (i + i))) + SPACE.repeat(i) + '#' + BREAK_LINE;
      side = i;
    } else {
      break;
    }
  }

  for (i = 1; i < Math.floor(n / 2); i += 1) {
    if (n % 2 === 0) {
      emptyTriangle += '#' + SPACE.repeat(side - i) + '#' + SPACE.repeat(i + (i - 2)) + '#' + SPACE.repeat(side - i) + '#' + BREAK_LINE;
    } else if (n % 2 !== 0) {
      emptyTriangle += '#' + SPACE.repeat(side - i) + '#' + SPACE.repeat(i + (i - 1)) + '#' + SPACE.repeat(side - i) + '#' + BREAK_LINE;
    } else {
      break;
    }
  }


  const FINAL = triangle + emptyTriangle

  return FULL_LINE + FINAL + FULL_LINE;
}

console.log(compass(100));