import { invoke } from '@tauri-apps/api/tauri';
import { createSignal } from 'solid-js';
import Keypad from './components/Keypad';
import Input from './components/Input';

function App() {
	const [expression, setExpression] = createSignal('');
	const [result, setResult] = createSignal('');

	const calculateResult = async () => {
		try {
			const calcResult = await invoke('calculate', {
				expression: expression(),
			});
			setResult((calcResult as number).toString());
		} catch (error) {
			setResult('Error');
		}
	};

	return (
		<div class='bg-gruv-bg'>
			<Input
				expression={expression}
				setExpression={setExpression}
				result={result}
				calculateResult={calculateResult}
			/>
			<Keypad
				setExpression={setExpression}
				setResult={setResult}
				calculateResult={calculateResult}
			/>
		</div>
	);
}

export default App;
