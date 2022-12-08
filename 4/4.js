const input = require('./input');

const total = input.split('\n').reduce((acc, pair) => {
	const [firstStart, firstEnd, secondStart, secondEnd] = pair.split(',').flatMap((set) => set.split('-')).map((input) => Number.parseFloat(input));
	// const isContained = (firstStart <= secondStart && firstEnd >= secondEnd) || (secondStart <= firstStart && secondEnd >= firstEnd);
	const isContained = !(firstEnd < secondStart || secondEnd < firstStart);

	return acc + (isContained ? 1 : 0);
}, 0);

console.log(total)