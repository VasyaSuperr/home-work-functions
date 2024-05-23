console.log("Завдання 1");
/**
 * @function isWorkingAgePerson
 * @param {number} agePeson - Age of a person
 * @returns {boolean} A boolean indicating if the person is of working age (able-bodied person or not)
 */
function isWorkingAgePerson(agePerson) {
  return agePerson >= 16 && agePerson <= 64;
}

const age = 88;
console.log(`Вік в ${age} роки працездатний :>> `, isWorkingAgePerson(age));

console.log("Завдання 2");
/**
 * @function checkMultiplicity
 * @param {number} a - A number that is divided into a whole
 * @param {number} b - The number by which is devided by the target
 * @returns {boolean} A boolean value or divisible by the first number by the second whole
 */
function checkMultiplicity(a, b) {
  return a % b === 0;
}

const fisrtNumber = 15;
const secondNumber = 4;

console.log(
  `Число ${fisrtNumber} ділиться націло на число ${secondNumber} :>> `,
  checkMultiplicity(fisrtNumber, secondNumber)
);

console.log("Завдання 3");
/**
 * @function isThereTriangle
 * @param {number} a - a - side a triangle
 * @param {number} b - b - side a triangle
 * @param {number} c - c - side a triangle
 * @returns {boolean} A boolean value that indicates whether a triangle exists or not
 */
function isThereTriangle(a, b, c) {
  return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
}

const sideA = 3;
const sideB = 6;
const sideC = 5;

console.log(
  `Існує трикутник з такими сторонами ${sideA}, ${sideB}, ${sideC} :>> `,
  isThereTriangle(sideA, sideB, sideC)
);

console.log("Завдання 4");
/**
 * @function calculateSquareArea
 * @param {number} side - Lenghtof the side of the square
 * @returns {number} Square area
 */
function calculateSquareArea(side) {
  return side * side;
}

const sideSquare = 20;
console.log(
  `Площа квадрата: 
  V = ${sideSquare} * ${sideSquare} = ${calculateSquareArea(sideSquare)}`
);
