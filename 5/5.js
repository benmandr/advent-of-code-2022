const input = require('./input');

const inputLines = input.split('\n');
const separatorIndex = inputLines.findIndex((item) => item === '')
const boxesPatternWithInstructions = inputLines.slice(0, separatorIndex);

const boxesPatterns = boxesPatternWithInstructions.slice(0, boxesPatternWithInstructions.length - 1).reverse();
const boxIndexNumbersString = boxesPatternWithInstructions[boxesPatternWithInstructions.length - 1];
const boxIndexesArray = [...boxIndexNumbersString].filter((char) => Number.parseFloat(char));
const boxMap = boxIndexesArray.reduce((acc, boxIndex) => ({
	...acc,
	[boxIndex]: boxesPatterns.map((boxPattern) => boxPattern[boxIndexNumbersString.indexOf(boxIndex)]).filter((item) => item !== ' '),
}), {})

const instructions = inputLines.slice(separatorIndex + 1);

instructions.forEach((instruction) => {
	const [moveAmount, moveFrom, moveTo] = instruction.split(/move(.*)from(.*)to(.*)/).filter((item) => item).map((item) => item.trim());
	const itemsToMove = boxMap[moveFrom].splice(-moveAmount);
	boxMap[moveTo].push(...itemsToMove)
});

const answer = Object.values(boxMap).reduce((final, boxesArray) => `${final}${boxesArray[boxesArray.length - 1]}`, '')

console.log(answer)