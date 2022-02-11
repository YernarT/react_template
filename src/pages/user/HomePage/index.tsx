import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { pageAtom } from '@/store';

import { TextField, Divider, Button } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { Count } from '@/components/user';

import { Card } from './style';

export default function HomePage() {
	const [value, setValue] = useState('09-02-2002');
	const setPage = useSetRecoilState(pageAtom);

	const toggleViewMode = () => {
		setPage(currVal =>
			Object.assign({}, currVal, {
				viewMode: currVal.viewMode === 'dark' ? 'light' : 'dark',
			}),
		);
	};

	return (
		<div className="home-page">
			<h1>Home Page</h1>
			<Count />
			<Divider style={{ margin: '40px 0' }} />

			<Button variant="contained" onClick={toggleViewMode}>
				Toggle View Mode
			</Button>

			<Divider style={{ margin: '40px 0' }} />

			<DatePicker
				label="Туған күн"
				mask="__.__.____"
				value={value}
				onChange={newValue => {
					setValue(newValue || '');
				}}
				renderInput={params => <TextField {...params} />}
			/>

			<Divider style={{ margin: '40px 0' }} />

			<Card>
				<div className="title">css in js example</div>
				<p className="text">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
					soluta cum aliquid ratione sint. Fuga laboriosam suscipit dolore
					delectus. Inventore, non quaerat. Ipsam voluptas ad animi molestiae
					error deleniti qui.
				</p>
			</Card>
		</div>
	);
}
