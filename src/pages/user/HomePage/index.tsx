import { useState } from 'react';

import { TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { Count } from '@/components/user';

export default function HomePage() {
	const [value, setValue] = useState('09-02-2002');
	return (
		<div className="home-page">
			<h1>Home Page</h1>

			<Count />
			<hr />

			<DatePicker
				label="Basic example"
				mask='__.__.____'
				value={value}
				onChange={newValue => {
					setValue(newValue || '');
				}}
				renderInput={params => <TextField {...params} />}
			/>
		</div>
	);
}
