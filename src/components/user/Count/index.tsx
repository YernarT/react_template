import { Button } from '@mui/material';

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
				<Button type="button" variant="contained" onClick={() => inc()}>
					inc()
				</Button>
				<Button type="button" variant="contained" onClick={() => dec()}>
					dec()
				</Button>
				<Button type="button" variant="contained" onClick={() => set(3)}>
					set(3)
				</Button>
				<Button type="button" variant="contained" onClick={reset}>
					reset()
				</Button>
			</div>
		</div>
	);
}
