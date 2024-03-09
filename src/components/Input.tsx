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
		<div class='w-full p-4 flex flex-row space-x-10 justify-between items-center text-gruv-yellow font-bold'>
			<input
				class='bg-gruv-bg  h-12 w-1/2 border-b-2 border-gruv-blue outline-none focus:outline-none'
				type='text'
				readOnly={true}
				value={expression()}
				onInput={(e) =>
					setExpression((e.target as HTMLInputElement).value)
				}
				onKeyPress={(e) => e.key === 'Enter' && calculateResult()}
			/>
			<div class='flex flex-row justify-between w-1/2'>
				<p>=</p>
				<p>{result()}</p>
			</div>
		</div>
	);
};

export default Input;
