const input = require('./input');

const CHOICE_ROCK = 'ROCK';
const CHOICE_PAPER = 'PAPER';
const CHOICE_SCISSORS = 'SCISSORS';
const OUTCOME_DRAW = 'DRAW';
const OUTCOME_LOSS = 'LOSS';
const OUTCOME_WIN = 'WIN';

const CHOICE_MAP = {
	'A': CHOICE_ROCK,
	'B': CHOICE_PAPER,
	'C': CHOICE_SCISSORS,
	'X': CHOICE_ROCK,
	'Y': CHOICE_PAPER,
	'Z': CHOICE_SCISSORS,
};

const NEEDED_OUTCOME_MAP = {
	'X': OUTCOME_LOSS,
	'Y': OUTCOME_DRAW,
	'Z': OUTCOME_WIN,
};

const CHOICE_POINTS_MAP = {
	[CHOICE_ROCK]: 1,
	[CHOICE_PAPER]: 2,
	[CHOICE_SCISSORS]: 3,
};

const OUTCOME_POINTS_MAP = {
	[OUTCOME_LOSS]: 0,
	[OUTCOME_DRAW]: 3,
	[OUTCOME_WIN]: 6,
}

const getMatchOutcome = ({ opponentChoice, myChoice }) => {
	if (opponentChoice === myChoice) {
		return OUTCOME_DRAW;
	}

	const winConditon = (myChoice === CHOICE_ROCK && opponentChoice === CHOICE_SCISSORS) || (myChoice === CHOICE_PAPER && opponentChoice === CHOICE_ROCK) || (myChoice === CHOICE_SCISSORS && opponentChoice === CHOICE_PAPER);

	if (winConditon) {
		return OUTCOME_WIN;
	}

	return OUTCOME_LOSS;
};

const getMyChoiceByOpponentChoiceAndRequiredMatchOutcome = ({ opponentChoice, requiredMatchOutcome }) => {
	if (requiredMatchOutcome === OUTCOME_DRAW) {
		return opponentChoice;
	}

	if (requiredMatchOutcome === OUTCOME_LOSS && opponentChoice === CHOICE_ROCK) {
		return CHOICE_SCISSORS;
	}

	if (requiredMatchOutcome === OUTCOME_LOSS && opponentChoice === CHOICE_PAPER) {
		return CHOICE_ROCK
	};

	if (requiredMatchOutcome == OUTCOME_LOSS && opponentChoice === CHOICE_SCISSORS) {
		return CHOICE_PAPER;
	}

	if (requiredMatchOutcome === OUTCOME_WIN && opponentChoice === CHOICE_ROCK) {
		return CHOICE_PAPER;
	}

	if (requiredMatchOutcome === OUTCOME_WIN && opponentChoice === CHOICE_PAPER) {
		return CHOICE_SCISSORS;
	}

	if (requiredMatchOutcome === OUTCOME_WIN && opponentChoice === CHOICE_SCISSORS) {
		return CHOICE_ROCK;
	}
};

const strategyArrays = input.split('\n').map((strategy) => strategy.split(' '));
const choicesArrays = strategyArrays.map(([opponentChoice, requiredMatchOutcome]) => [CHOICE_MAP[opponentChoice], NEEDED_OUTCOME_MAP[requiredMatchOutcome]]);
const outcomeScoresArray = choicesArrays.map(([opponentChoice, requiredMatchOutcome]) => {
	const myChoice = getMyChoiceByOpponentChoiceAndRequiredMatchOutcome({ opponentChoice, requiredMatchOutcome });
	const matchOutcome = getMatchOutcome({ opponentChoice, myChoice });
	const matchOutcomeScore = OUTCOME_POINTS_MAP[matchOutcome];
	const chosenShapeScore = CHOICE_POINTS_MAP[myChoice];

	return matchOutcomeScore + chosenShapeScore;
});
const totalScore = outcomeScoresArray.reduce((score, totalScore) => score + totalScore, 0);
console.log(totalScore);