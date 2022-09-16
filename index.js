const BREAK_LINE = '\n';
const SPACE = ' ';

const compass = (n = 20, character = '#') => {
  const FULL_LINE = character.repeat(n) + BREAK_LINE;
  let triangle = '';
  let emptyTriangle = '';
  let side = 0;


  for (i = 0; i < Math.floor(n / 2); i++) {
    triangle += character + SPACE.repeat(i) + character.repeat(n - (2 + (i + i))) + SPACE.repeat(i) + character;
    side = i;
    if (i <= Math.floor(n / 2)) {
      triangle += BREAK_LINE;
    } else {
      break;
    }
  }

  for (i = 1; i < Math.floor(n / 2); i += 1) {
    if (n % 2 === 0) {
      emptyTriangle += character + SPACE.repeat(side - i) + character + SPACE.repeat(i + (i - 2)) + character + SPACE.repeat(side - i) + character + BREAK_LINE;
    } else if (n % 2 !== 0) {
      emptyTriangle += character + SPACE.repeat(side - i) + character + SPACE.repeat(i + (i - 1)) + character + SPACE.repeat(side - i) + character + BREAK_LINE;
    } else {
      break;
    }
  }

  let fullTriangle = triangle.replace(character + SPACE.repeat(n - 2) + character, '').trim();
  const FINAL = fullTriangle + BREAK_LINE + emptyTriangle;

  return FULL_LINE + FINAL + FULL_LINE;
}

console.log(compass(100, '@'));