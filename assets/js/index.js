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
 * @param {number} side - Lenght of the side of the square
 * @returns {number} Square area
 */
function calculateSquareArea(side) {
  return side * side;
}

const sideSquare = 20;
console.log(
  `Площа квадрата :>> S = ${sideSquare} * ${sideSquare} = `,
  calculateSquareArea(sideSquare)
);

/**
 * @function calculateRectangleArea
 * @param {number} width - Lenght of the first side of the rectangle
 * @param {number} lenght - Lenght of the second side of the rectangle
 * @returns {number} Rectangle area
 */
function calculateRectangleArea(width, lenght) {
  return width * lenght;
}

const widthRectangle = 5;
const lenghtRectangle = 10;

console.log(
  `Площа прямокутника :>> S = ${widthRectangle} * ${lenghtRectangle} = `,
  calculateRectangleArea(widthRectangle, lenghtRectangle)
);

console.log("Завдання 5");

function isPrimeNumber(someNumber) {
  if (someNumber < 2) {
    return false;
  }

  if (someNumber % 2 === 0 || someNumber % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= someNumber; i += 6) {
    if (someNumber % i === 0 || someNumber % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

const numberForCheckIsPrime = 105;

console.log(
  `Число ${numberForCheckIsPrime} є простим :>> `,
  isPrimeNumber(numberForCheckIsPrime)
);

// console.log("Завдання 6");
// console.log("Зображено на сторінці");

// /**
//  * @function productCard
//  * @param {string} imgAddress - Product photo
//  * @param {string} productName - Product name
//  * @param {string} description - Product description
//  * @param {number} price - Product price
//  * @param {number} discountedPrice - Product discounted price
//  */
// function productCard(
//   imgAddress,
//   productName,
//   description,
//   price,
//   discountedPrice
// ) {
//   let classPriceText = "";
//   let discount = null;
//   let discountedPriceText = "";

//   if (discountedPrice !== undefined) {
//     classPriceText = "class='product-price'";
//     discount = ((price - discountedPrice) / price) * 100;
//     discountedPriceText = `
//     <p class="product-discounted-price">${discountedPrice} грн. </p>
//     <p class="product-discounted-price">Знижка - ${Math.round(discount)}%</p>`;
//   } else {
//     classPriceText = "";
//   }

//   document.write(`
//   <div class="retreats">
//     <article class="product-card">
//       <img class="product-photo" src="${imgAddress}" alt="Product photo" />
//       <h3 class="product-name">${productName}</h3>
//       <p class="product-description">${description}</p>
//       <div class="div-product-price">
//       <p ${classPriceText}>${price} грн.</p>
//       ${discountedPriceText}
//       </div>
//     </article>
//   </div>
//   `);
// }

// const photoProduct = prompt(
//   "Вставте адресу фотографії ",
//   "https://cdn-icons-png.flaticon.com/512/1170/1170679.png"
// );
// const nameProduct = prompt("Введіть назву товару", "Lorem Ispum");
// const descriptionProduct = prompt(
//   "Введіть опис товару",
//   "Lorem lipsum dolor sit amet, consectetuer odipiscing elit, sed diam nonummy nibh euismod tincidunt ut"
// );
// const priceProduct = +prompt("Введіть ціну товару", "1500");
// const discountedPriceProduct = +prompt(
//   "Введіть ціну товару після знижки",
//   "1100"
// );

// productCard(
//   photoProduct,
//   nameProduct,
//   descriptionProduct,
//   priceProduct,
//   discountedPriceProduct
// );

console.log("Завдання 7");
console.log("Function expression");
/**
 * @function calculateTriangleArea
 * @param {number} a - a - side a triangle
 * @param {number} b - b - side a triangle
 * @param {number} c - c - side a triangle
 * @returns {number} Triangle area
 */
const calculateTriangleArea = function (a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

const sideATriangle = 3;
const sideBTriangle = 6;
const sideCTriangle = 5;

console.log(
  `Площа трикутника (формула Герона) :>> S = `,
  calculateTriangleArea(sideATriangle, sideBTriangle, sideCTriangle)
);

/**
 * @function calculateConeArea
 * @param {number} r - Radius
 * @param {number} h - Height
 * @returns {number} Cone area
 */
const calculateConeArea = function (r, h) {
  const l = Math.sqrt(r * r + h * h);

  return Math.PI * r * (r + l);
};

const radiusCone = 3;
const heightCone = 4;

console.log(`Площа конуса :>> S = `, calculateConeArea(radiusCone, heightCone));
