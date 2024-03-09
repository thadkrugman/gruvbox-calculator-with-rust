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
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton
					onClick={() => clearExpression()}
					foreground='text-gruv-red'
					fontWeight='font-black'
				>
					C
				</CalcButton>
				<CalcButton
					onClick={() => addToExpression('(')}
					foreground='text-gruv-aqua'
				>
					(
				</CalcButton>
				<CalcButton
					onClick={() => addToExpression(')')}
					foreground='text-gruv-aqua'
				>
					)
				</CalcButton>
				<CalcButton
					onClick={() => addToExpression('%')}
					foreground='text-gruv-aqua'
				>
					mod
				</CalcButton>
				<CalcButton
					onClick={() => addToExpression('pi')}
					foreground='text-gruv-aqua'
				>
					&pi;
				</CalcButton>
			</div>
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton onClick={() => addToExpression('7')}>7</CalcButton>
				<CalcButton onClick={() => addToExpression('8')}>8</CalcButton>
				<CalcButton onClick={() => addToExpression('9')}>9</CalcButton>
				<CalcButton
					onClick={() => addToExpression('/')}
					foreground='text-gruv-aqua'
				>
					&divide;
				</CalcButton>
				<CalcButton
					onClick={() => addToExpression('sqrt(2)')}
					foreground='text-gruv-aqua'
				>
					&radic;
				</CalcButton>
			</div>
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton onClick={() => addToExpression('4')}>4</CalcButton>
				<CalcButton onClick={() => addToExpression('5')}>5</CalcButton>
				<CalcButton onClick={() => addToExpression('6')}>6</CalcButton>
				<CalcButton
					onClick={() => addToExpression('*')}
					foreground='text-gruv-aqua'
				>
					&times;
				</CalcButton>
				<CalcButton
					onClick={() => addToExpression('^')}
					foreground='text-gruv-aqua'
				>
					<p>
						3<sup>3</sup>
					</p>
				</CalcButton>
			</div>

			<div class='flex flex-row space-x-1 w-full h-2/5'>
				<div class='flex flex-col space-y-1 w-full'>
					<CalcButton onClick={() => addToExpression('1')}>
						1
					</CalcButton>
					<CalcButton onClick={() => addToExpression('0')}>
						0
					</CalcButton>
				</div>
				<div class='flex flex-col space-y-1 w-full'>
					<CalcButton onClick={() => addToExpression('2')}>
						2
					</CalcButton>
					<CalcButton
						onClick={() => addToExpression('.')}
						foreground='text-gruv-aqua'
					>
						.
					</CalcButton>
				</div>
				<div class='flex flex-col space-y-1 w-full'>
					<CalcButton onClick={() => addToExpression('3')}>
						3
					</CalcButton>
					<CalcButton
						onClick={() => addToExpression(')')}
						foreground='text-gruv-aqua'
					>
						%
					</CalcButton>
				</div>
				<div class='flex flex-col space-y-1 w-full'>
					<CalcButton
						onClick={() => addToExpression('-')}
						foreground='text-gruv-aqua'
					>
						-
					</CalcButton>
					<CalcButton
						onClick={() => addToExpression('+')}
						foreground='text-gruv-aqua'
					>
						+
					</CalcButton>
				</div>
				<div class='w-full'>
					<CalcButton
						onClick={calculateResult}
						foreground='text-gruv-orange'
					>
						=
					</CalcButton>
				</div>
			</div>
		</div>
	);
};

export default Keypad;
