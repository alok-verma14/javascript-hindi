// Array Extreneous uses 
const arr = [];
// %DebugPrint(myArr);

// Two types of Array:
// Continuous(packed) and Holey Array
// The optimzation of this array is done in three different ways

// SMI (small integer)
// Packed Elements 
// Double (floAt, string, function )

const myArr2 = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS -> best optimized array but it should contain numbers only

myArr2.push(6.0);
// PACKED_DOUBLE_ELEMENTS 

myArr2.push('7');
// PACKED_ELEMENTS

myArr2[10] = 11;
// HOLEY_ELEMENTS

console.log(myArr2);
console.log(myArr2.length);
console.log(myArr2[9]);

// Bound Check
// hasOwnProperty(myArr2, 9)
// hasOwnProperty(myArr2.prototype, 10)
// hasOwnproperty(Object.prototype, 10)

// ***** holes are very expensive in javascript *****

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

// Continuous = PACKED_SMI > PACKED_DOUBLE > PACKED_ELEMENTS
// HOLEY = HOLEY_SMI > HOLEY_DOUBLE > HOLEY_PACKED

// Note -> There are almost 30 - 35 variations including loops 
// Note -> Once the omptimaztion is downgrade, it is alomst impossible to upgrade 

const arrfour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS
arrfour[0] = '1'; // HOLEY_ELEMENTS
arrFour[1] = '2'; // HOLEY_ELEMENTS
arrFour[2] = '3'; // HOLEY_ELEMENTS

const arrFive = [];
arrFive.push('1');  // HOLEY_ELEMENTS
arrFive.push('2');  // HOLEY_ELEMENTS
arrFive.push('3');  // HOLEY_ELEMENTS

const arrSix = [1, 2, 3, 4, 5];
arrSix.push(NaN) // PACKED_DOUBLE
arrSix.push(Infinity) // PACKED_DOUBLE

// for, for-of, forEach



