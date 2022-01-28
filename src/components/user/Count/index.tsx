import { useCounter } from 'ahooks';

export default function Count() {
	const [current, { inc, dec, set, reset }] = useCounter(0, {
		min: -4,
		max: 10,
	});

	return (
		<div>
			<p>count: {current} [max: 10; min: -4;]</p>

			<div>
				<button
					type="button"
					onClick={() => {
						inc();
					}}>
					inc()
				</button>
				<button
					type="button"
					onClick={() => {
						dec();
					}}>
					dec()
				</button>
				<button
					type="button"
					onClick={() => {
						set(3);
					}}>
					set(3)
				</button>
				<button type="button" onClick={reset}>
					reset()
				</button>
			</div>
		</div>
	);
}
