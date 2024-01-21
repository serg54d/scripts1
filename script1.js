// function basicOp(operation, value1, value2) {
// 	let val1 = value1;
// 	let val2 = value2;
// 	let operator = operation;
// 	let result = `${val1} ${operator} ${val2}`;
//   console.log(typeof(result));
// 	return console.log(result);

// }

// basicOp('+', 6, 5);
// console.log(basicOp);


// console.log("10");

function basicOp(operation, value1, value2) {
	let val1 = value1;
	let val2 = value2;
	let operator = operation;
	switch (operator) {
		case '+':
			result = val1 + val2;
			break;
		case '-':
			result = val1 - val2;
			break;
		case '*':
			result = val1 * val2;
			break;
		case '/':
			result = val1 / val2;
			break;
		default: return 'Введите правильный оператор';
	}
	return console.log(result);
}

basicOp('+', 6, 5);


function testCalc(o, a, b) {
	return console.log(eval(a + o + b));
}

testCalc('+', 3, 3);