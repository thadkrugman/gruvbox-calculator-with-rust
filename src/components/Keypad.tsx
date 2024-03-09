import { Component } from 'solid-js';
import CalcButton from './CalcButton';

const Keypad: Component = () => {
	return (
		<div class='flex flex-col space-y-1 p-2 h-[360px] w-[360px]'>
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton foreground='text-gruv-red' fontWeight='font-black'>
					C
				</CalcButton>
				<CalcButton foreground='text-gruv-aqua'>(</CalcButton>
				<CalcButton foreground='text-gruv-aqua'>)</CalcButton>
				<CalcButton foreground='text-gruv-aqua'>mod</CalcButton>
				<CalcButton foreground='text-gruv-aqua'>&pi;</CalcButton>
			</div>
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton>7</CalcButton>
				<CalcButton>8</CalcButton>
				<CalcButton>9</CalcButton>
				<CalcButton foreground='text-gruv-aqua'>&divide;</CalcButton>
				<CalcButton foreground='text-gruv-aqua'>&radic;</CalcButton>
			</div>
			<div class='flex flex-row space-x-1 h-1/5'>
				<CalcButton>4</CalcButton>
				<CalcButton>5</CalcButton>
				<CalcButton>6</CalcButton>
				<CalcButton foreground='text-gruv-aqua'>&times;</CalcButton>
				<CalcButton foreground='text-gruv-aqua'>
					<p>
						3<sup>3</sup>
					</p>
				</CalcButton>
			</div>

			<div class='flex flex-row space-x-1 w-full h-2/5'>
				<div class='flex flex-col space-y-1 w-full'>
					<CalcButton>1</CalcButton>
					<CalcButton>0</CalcButton>
				</div>
				<div class='flex flex-col space-y-1 w-full'>
					<CalcButton>2</CalcButton>
					<CalcButton foreground='text-gruv-aqua'>.</CalcButton>
				</div>
				<div class='flex flex-col space-y-1 w-full'>
					<CalcButton>3</CalcButton>
					<CalcButton foreground='text-gruv-aqua'>%</CalcButton>
				</div>
				<div class='flex flex-col space-y-1 w-full'>
					<CalcButton foreground='text-gruv-aqua'>-</CalcButton>
					<CalcButton foreground='text-gruv-aqua'>+</CalcButton>
				</div>
				<div class='w-full'>
					<CalcButton foreground='text-gruv-orange'>=</CalcButton>
				</div>
			</div>
		</div>
	);
};

export default Keypad;
