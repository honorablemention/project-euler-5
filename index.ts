// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

/**
 * Solution
 */

/**
 * Use Euclidean's Algorithm to find GCD
 */
const getGCD = (a: number, b: number): number => {
  let _a = Math.abs(a);
  let _b = Math.abs(b);
  while (_b !== 0) {
    let t = _b;
    _b = _a % _b;
    _a = t;
  }
  return _a;
};

/**
 * Use LCM formula
 */
const getLCM = (a: number, b: number): number => {
  return (a * b) / getGCD(a, b);
};

/**
 * Starting with i = 2, find LCM for each {i, i+1} set,
 * saving the result in x
 */
function getLCMForNumbersUpTo(max: number): number {
  let i = 2;
  let x = i;
  while (i < max) {
    x = getLCM(x, i + 1);
    i = i + 1;
  }
  return x;
}

console.log(getLCMForNumbersUpTo(20));

appDiv.appendChild(
  document.createTextNode(`Answer: ${getLCMForNumbersUpTo(20)}`)
);
