import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { PageNotFoundPageStyledBox } from './style';

export default function PageNotFoundPage() {
	const { t } = useTranslation();

	return (
		<PageNotFoundPageStyledBox
			status="404"
			title="404"
			extra={
				<Link component={Typography.Link} to="/">
					{t('backToHome')}
				</Link>
			}
		/>
	);
}
