import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

// Perform some operations and log to console
console.log('Addition: 5 + 3 =', add(5, 3));
console.log('Subtraction: 10 - 4 =', subtract(10, 4));
console.log('Multiplication: 6 * 7 =', multiply(6, 7));
console.log('Division: 15 / 3 =', divide(15, 3));

// Test division by zero
try {
    console.log('Division by zero: 10 / 0 =', divide(10, 0));
} catch (error) {
    console.log('Error:', error.message);
}