import type { SelectChangeEvent } from '@mui/material';
import type { allowedLocale } from '#/locale';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { pageAtom } from '@/store';
import { getHtmlLang } from '@/utils';

import i18next from 'i18next';
import { useTranslation, Trans } from 'react-i18next';
import { useSafeState } from 'ahooks';

import { Divider, Select, MenuItem, Box, Button } from '@mui/material';

import { favicon } from '@/assets/image';
import { IntroduceStyledBox } from './style';

export default function IntroducePage() {
	return (
		<IntroduceStyledBox>
			<img src={favicon} alt="Logo" className="logo" />

			<div className="bread">
				<a href="https://reactjs.org/">
					<img
						src="https://img.shields.io/badge/React-17.0.2-blue?logo=React"
						alt="React"
					/>
				</a>

				<a href="https://vitejs.dev/">
					<img
						src="https://img.shields.io/badge/Vite-2.7.2-blueviolet?logo=Vite"
						alt="Vite"
					/>
				</a>

				<a href="https://www.typescriptlang.org/">
					<img
						src="https://img.shields.io/badge/TypeScript-4.4.4-blue?logo=TypeScript"
						alt="TypeScript"
					/>
				</a>
			</div>

			<h1 className="title">React Template · V5.0.0</h1>
			<Divider className="divider" style={{ width: '100%' }} />

			<I18nExample />

			<Divider className="divider" style={{ width: '100%' }} />

			<ViewModeExample />
		</IntroduceStyledBox>
	);
}

function I18nExample() {
	const [page, setPage] = useRecoilState(pageAtom);
	const { t } = useTranslation();
	const [langChangedCount, setLangChangedCount] = useSafeState(0);

	const handleChangeLocale = ({ target: { value } }: SelectChangeEvent) => {
		document.documentElement.lang = getHtmlLang(value as allowedLocale);
		i18next.changeLanguage(value);
		setLangChangedCount(prevState => prevState + 1);
		setPage(currVal => ({ ...currVal, locale: value as allowedLocale }));
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				padding: '20px 16px',
			}}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					flexWrap: 'wrap',
					columnGap: '8px',
				}}>
				<h1>{t('title')}</h1>
				<Select
					value={page.locale}
					onChange={handleChangeLocale}
					style={{ height: 'min-content' }}>
					<MenuItem value="enUS">English</MenuItem>
					<MenuItem value="zhCN">中文</MenuItem>
					<MenuItem value="kkKZ">Қазақша</MenuItem>
				</Select>
			</Box>
			<p>
				<Trans components={{ bold: <strong />, italics: <i /> }}>sample</Trans>
			</p>
			<p>
				{t('change_interval', {
					postProcess: 'interval',
					count: langChangedCount,
				})}
			</p>
		</Box>
	);
}

function ViewModeExample() {
	const setPage = useSetRecoilState(pageAtom);

	const toggleViewMode = () => {
		setPage(currVal =>
			Object.assign({}, currVal, {
				viewMode: currVal.viewMode === 'dark' ? 'light' : 'dark',
			}),
		);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				padding: '20px 16px',
			}}>
			<Button variant="contained" onClick={toggleViewMode}>
				Toggle View Mode
			</Button>
		</Box>
	);
}
