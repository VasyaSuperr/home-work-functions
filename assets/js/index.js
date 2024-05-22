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
