#!/usr/bin/env node

function fizzbuzz() {
  const lines = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      lines.push(`FizzBuzz`);
    } else if (i % 3 === 0) {
      lines.push(`Fizz`);
    } else if (i % 5 === 0) {
      lines.push(`Buzz`);
    } else {
      lines.push(`${i}`);
    }
  }
  console.log(lines.join('\n'));
}

fizzbuzz();