import { Component } from 'solid-js';

const Input: Component = () => {
	return (
		<div class='w-full p-4'>
			<input
				type='text'
				value={expression()}
				onInput={handleInputChange}
				onKeyPress={handleKeyPress}
				placeholder='Type an expression'
			/>

			<div>
				<p>Result: {result()}</p>
			</div>
		</div>
	);
};
export default Input;
