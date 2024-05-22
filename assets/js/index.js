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
console.log("Працездатний вік :>> ", isWorkingAgePerson(age));
