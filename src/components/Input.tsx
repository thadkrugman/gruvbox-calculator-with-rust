import { Component, Setter } from 'solid-js';

interface InputProps {
	expression: () => string;
	setExpression: Setter<string>;
	result: () => string;
	calculateResult: () => Promise<void>;
}

const Input: Component<InputProps> = ({
	expression,
	setExpression,
	result,
	calculateResult,
}) => {
	return (
		<div class='flex-1 p-4 mx-4 flex flex-row space-x-10 justify-between items-center font-bold border-b-2 border-gruv-orange'>
			<input
				class='bg-gruv-bg  h-12 w-1/2 outline-none focus:outline-none text-gruv-yellow'
				type='text'
				readOnly={true}
				value={expression()}
				onInput={(e) =>
					setExpression((e.target as HTMLInputElement).value)
				}
				onKeyPress={(e) => e.key === 'Enter' && calculateResult()}
			/>
			<div class='flex flex-row justify-between w-1/2 text-gruv-yellow'>
				<p>=</p>
				<p>{result()}</p>
			</div>
		</div>
	);
};

export default Input;
