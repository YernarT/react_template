import { useRecoilState } from 'recoil';
import { pageAtom } from '@/store';

import {
	TextField,
	Divider,
	Button,
	Select,
	MenuItem,
	Box,
	SelectChangeEvent,
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import { Count } from '@/components/user';

import i18next from 'i18next';
import { useTranslation, Trans } from 'react-i18next';
import { useSafeState } from 'ahooks';

import { Card } from './style';

export default function HomePage() {
	const [value, setValue] = useSafeState('09-02-2002');
	const [langChangedCount, setLangChangedCount] = useSafeState(5);
	const [page, setPage] = useRecoilState(pageAtom);
	const { t } = useTranslation();

	const toggleViewMode = () => {
		setPage(currVal =>
			Object.assign({}, currVal, {
				viewMode: currVal.viewMode === 'dark' ? 'light' : 'dark',
			}),
		);
	};

	const handleChangeLocale = ({ target: { value } }: SelectChangeEvent) => {
		i18next.changeLanguage(value);
		setLangChangedCount(prevState => prevState + 1);
		setPage(currVal => ({ ...currVal, locale: value }));
	};

	return (
		<div className="home-page">
			<h1>{t('title')}</h1>
			<p>
				<Trans components={{ bold: <strong />, italics: <i /> }}>sample</Trans>
			</p>
			<p>{t('change', { count: langChangedCount })}</p>

			<Divider style={{ margin: '40px 0' }} />

			<Count />

			<Divider style={{ margin: '40px 0' }} />

			<Box
				sx={{
					display: 'flex',
					gap: 2,
				}}>
				<Button variant="contained" onClick={toggleViewMode}>
					Toggle View Mode
				</Button>

				<Select value={page.locale} label="🌐" onChange={handleChangeLocale}>
					<MenuItem value="enUS">English</MenuItem>
					<MenuItem value="zhCN">Chinese</MenuItem>
					<MenuItem value="kkKZ">Kazakh</MenuItem>
				</Select>
			</Box>

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
