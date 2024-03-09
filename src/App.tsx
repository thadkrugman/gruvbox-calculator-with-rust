import { createSignal } from 'solid-js';
import { invoke } from '@tauri-apps/api/tauri';
import Keypad from './components/Keypad';
import Input from './components/Input';

function App() {
	const [expression, setExpression] = createSignal('');
	const [result, setResult] = createSignal('');

	const handleInputChange = (event) => {
		setExpression(event.target.value);
	};

	const calculateResult = async () => {
		try {
			const calcResult = await invoke('calculate', {
				expression: expression(),
			});
			setResult(calcResult.toString());
		} catch (error) {
			setResult('Error: ' + error);
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			calculateResult();
		}
	};

	return (
		<div class='bg-gruv-bg'>
			<Input />
			<Keypad />
		</div>
	);
}

export default App;
