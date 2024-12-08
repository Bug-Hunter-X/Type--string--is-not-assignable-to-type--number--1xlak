function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: both arguments are numbers

function addString(a: number, b: string): string {
  return String(a) + b;
}

let stringResult = addString(1, '2'); //Correct: handles string concatenation

function addFlexible(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return String(a) + String(b);
  }
}

let flexibleResult = addFlexible(1, '2'); //Correct: handles mixed types