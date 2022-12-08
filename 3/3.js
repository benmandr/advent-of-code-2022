const input = require('./input');

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const arrayOfRucksacks = input.split('\n');

const arrayOfRucksacksArrays = arrayOfRucksacks.map((rucksack) => {
	const middleRucksackItemIndex = rucksack.length / 2;
	const firstRucksack = rucksack.slice(0, middleRucksackItemIndex);
	const secondRucksack = rucksack.slice(middleRucksackItemIndex);

	return [firstRucksack, secondRucksack];
});

const getItemPriorityScore = (rucksack) => ALPHABET.indexOf(rucksack) + 1;

const arrayOfCommonRucksackItems = arrayOfRucksacksArrays.map(([firstRucksack, secondRucksack]) => [...firstRucksack].find((rucksackItem) => secondRucksack.includes(rucksackItem)));

const prioritiesArray = arrayOfCommonRucksackItems.map(getItemPriorityScore);

const prioritiesSum = prioritiesArray.reduce((item, acc) => item + acc, 0);

const arraysOfGroupRucksacks = [...arrayOfRucksacks].reduce((chunksArray, ruckSack, index) => {
	const chunkIndex = Math.floor(index / 3);

	chunksArray[chunkIndex] = [...chunksArray[chunkIndex], ruckSack];

	return chunksArray;
}, Array(arrayOfRucksacks.length / 3).fill([]));

const arrayOfCommonGroupRucksackItems = arraysOfGroupRucksacks.map((arrayOfRucksacks) => {
	const arraysOfItems = arrayOfRucksacks.map((rucksack) => [...rucksack]);
	const [commonItem] = arraysOfItems.reduce((p,c) => p.filter((e) => c.includes(e)));

	return getItemPriorityScore(commonItem);
});

const arrayOfCommonGroupRucksackItemsSum = arrayOfCommonGroupRucksackItems.reduce((item, acc) => item + acc, 0);
console.log(arrayOfCommonGroupRucksackItemsSum)