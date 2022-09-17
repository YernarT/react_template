// 类型
import type { allowedLocale } from '@/i18n';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { pageAtom } from '@/store';
import { getHtmlLang } from '@/utils';

import i18next from 'i18next';
import { useTranslation, Trans } from 'react-i18next';
import { useSafeState } from 'ahooks';

import { Select, Button, Typography } from 'antd';

import { favicon } from '@/assets/image';
import { IntroduceStyledBox, I18nExampleStyledBox } from './style';

const { Option } = Select;

export default function IntroducePage() {
	const setPage = useSetRecoilState(pageAtom);

	const toggleViewMode = () => {
		setPage(prevState => ({
			...prevState,
			viewMode: prevState.viewMode === 'DARK' ? 'LIGHT' : 'DARK',
		}));
	};

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
						src="https://img.shields.io/badge/Vite-3.1.1-blueviolet?logo=Vite"
						alt="Vite"
					/>
				</a>

				<a href="https://www.typescriptlang.org/">
					<img
						src="https://img.shields.io/badge/TypeScript-4.8.4-blue?logo=TypeScript"
						alt="TypeScript"
					/>
				</a>
			</div>

			<Typography.Title className="title">
				React Template · V5.0.0
			</Typography.Title>

			<Button onClick={toggleViewMode}>Toggle View Mode</Button>

			<I18nExample />
		</IntroduceStyledBox>
	);
}

function I18nExample() {
	const [page, setPage] = useRecoilState(pageAtom);
	const { t } = useTranslation();
	const [langChangedCount, setLangChangedCount] = useSafeState(0);

	const handleChangeLocale = ({ target: { value } }) => {
		document.documentElement.lang = getHtmlLang(value as allowedLocale);
		i18next.changeLanguage(value);
		setLangChangedCount(prevState => prevState + 1);
		setPage(currVal => ({ ...currVal, locale: value as allowedLocale }));
	};

	return (
		<I18nExampleStyledBox>
			<Select defaultValue={page.locale} onChange={handleChangeLocale}>
				<Option value="enUS">English</Option>
				<Option value="zhCN">中文</Option>
				<Option value="kkKZ">Қазақша</Option>
			</Select>

			<Typography.Title level={2} className="title">
				{t('title')}
			</Typography.Title>

			<Typography.Text>
				<Trans components={{ bold: <strong />, italics: <i /> }}>sample</Trans>
			</Typography.Text>

			<Typography.Paragraph>
				{t('change_interval', {
					postProcess: 'interval',
					count: langChangedCount,
				})}
			</Typography.Paragraph>
		</I18nExampleStyledBox>
	);
}
