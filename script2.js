function removeEveryOther(arr) {
	console.log('исходный', arr);
	for (let i = 0; i < arr.length; i++) {

		delete arr[i += 1];

		// console.log('удаление', arr);
	}
	console.log('результат', arr);
	return (arr);
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
removeEveryOther([[1, 2]], [[1, 2]]);
removeEveryOther(['Hello', 'Goodbye', 'Hello Again'], ['Hello', 'Hello Again']);




