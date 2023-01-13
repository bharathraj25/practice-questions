const doubleNumbers = numbers => {

  if (!Array.isArray(numbers)) {
    throw new Error('Wrong Input');
  }
  return numbers.map(num => num * 2);
};

const filterNumbers = (numbers) => {
  try {
    return numbers.filter(number => number % 2 === 0);
  }
  catch (err) {
    throw new TypeError();
  }
};

// const tripleAndFilter = (numbers) =>
// {
//     try
//     {
//         numbers = numbers.map( number=> number*3)
//         return numbers.filter(number=>number%2===0)
//     }
//     catch(err)
//     {
//         throw new TypeError()
//     }
// }

const tripleThenFilter = numbers => numbers.reduce((acc, number) => {
  if ((number * 3) % 2 === 0) {
    acc.push(number);
  }
  return acc;
}, []);


console.log(tripleThenFilter([1, 2, 3, 4, 5]));


module.exports = { doubleNumbers, filterNumbers, tripleThenFilter };