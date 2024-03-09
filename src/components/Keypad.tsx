import { Component, Setter } from 'solid-js';
import CalcButton from './CalcButton';

interface KeypadProps {
	setExpression: Setter<string>;
	setResult: Setter<string>;
	calculateResult: () => Promise<void>;
}

const Keypad: Component<KeypadProps> = ({
	setExpression,
	setResult,
	calculateResult,
}) => {
	const addToExpression = (value: string) =>
		setExpression((prev) => `${prev}${value}`);
	const clearExpression = () => {
		setExpression('');
		setResult('');
	};

	return (
		<div class='flex flex-col space-y-1 p-2 h-[360px] w-[360px]'>
			{/* first row */}
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton
					onClick={() => clearExpression()}
					foreground='text-gruv-blue'
					fontWeight='font-black'
				>
					C
				</CalcButton>
				<CalcButton
					onClick={() => addToExpression('%')}
					foreground='text-gruv-blue'
				>
					mod
				</CalcButton>
				<CalcButton
					onClick={() => addToExpression('^')}
					foreground='text-gruv-blue'
				>
					x<sup>2</sup>
				</CalcButton>
				<CalcButton
					onClick={() => addToExpression('/')}
					foreground='text-gruv-aqua'
				>
					&divide;
				</CalcButton>
			</div>
			{/* second row */}
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton onClick={() => addToExpression('7')}>7</CalcButton>
				<CalcButton onClick={() => addToExpression('8')}>8</CalcButton>
				<CalcButton onClick={() => addToExpression('9')}>9</CalcButton>
				<CalcButton
					onClick={() => addToExpression('*')}
					foreground='text-gruv-aqua'
				>
					x
				</CalcButton>
			</div>
			{/* third row */}
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton onClick={() => addToExpression('4')}>4</CalcButton>
				<CalcButton onClick={() => addToExpression('5')}>5</CalcButton>
				<CalcButton onClick={() => addToExpression('6')}>6</CalcButton>
				<CalcButton
					onClick={() => addToExpression('-')}
					foreground='text-gruv-aqua'
				>
					-
				</CalcButton>
			</div>
			{/* fourth row */}
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton onClick={() => addToExpression('1')}>1</CalcButton>
				<CalcButton onClick={() => addToExpression('2')}>2</CalcButton>
				<CalcButton onClick={() => addToExpression('3')}>3</CalcButton>
				<CalcButton
					onClick={() => addToExpression('+')}
					foreground='text-gruv-aqua'
				>
					+
				</CalcButton>
			</div>
			{/* fifth row */}
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton onClick={() => addToExpression('0')}>0</CalcButton>
				<div class='w-full h-full'></div>
				<CalcButton onClick={() => addToExpression('.')}>.</CalcButton>
				<CalcButton
					onClick={calculateResult}
					foreground='text-gruv-aqua'
				>
					=
				</CalcButton>
			</div>
		</div>
	);
};

export default Keypad;
