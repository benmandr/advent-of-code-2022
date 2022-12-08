const input = require('./input');

const arrayOfElfCarriedCaloriesArrays = input.split('\n\n').map(
	(elfCaloriesString) => elfCaloriesString.split('\n').map(Number.parseFloat)
);

const arrayOfTotalElfCarriedCaloriesByOrder = arrayOfElfCarriedCaloriesArrays.map(
	(elfCarriedCaloriesArray) => elfCarriedCaloriesArray.reduce(
		(calories, totalCalories) => totalCalories + calories, 0)
	).sort((x,y) => y - x);

const [topFirstElf, topSecondElf, topThirdElf] = arrayOfTotalElfCarriedCaloriesByOrder;
const topThreeSum = topFirstElf + topSecondElf + topThirdElf;
console.log('Highest number of calories:', topFirstElf);
console.log('Highest of top three carried calories', topThreeSum)