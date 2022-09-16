// React & React 周边
import { memo } from 'react';
import { Link, useHistory } from 'react-router-dom';

// 业务库
import { useTranslation } from 'react-i18next';
import { useMemoizedFn } from 'ahooks';

// 组件
import { Typography } from 'antd';
import { AiOutlineLogin } from 'react-icons/ai';
import { HeaderWrap } from './style';
// 媒体资源
import { favicon } from '@/assets/image';

export default memo(function Header() {
	const history = useHistory();
	const { t } = useTranslation();

	const goHome = useMemoizedFn(() => {
		if (history.location.pathname !== '/') {
			history.push('/');
		}
	});

	return (
		<HeaderWrap>
			<header className="header">
				{/* 网站 Brand */}
				<div className="brand">
					<img src={favicon} alt="Logo" className="logo" onClick={goHome} />
					<Typography.Title className="title" onClick={goHome}>
						React Template
					</Typography.Title>
				</div>

				{/* 操作栏 */}
				<div className="actions">
					<Link
						to="/auth/sign-in"
						component={Typography.Link}
						className="sign-in">
						<span>{t('signIn')}</span>
						<AiOutlineLogin />
					</Link>
				</div>
			</header>
		</HeaderWrap>
	);
});
