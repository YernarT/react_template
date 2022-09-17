import styled from 'styled-components';

import { Result } from 'antd';

export const PageNotFoundPageStyledBox = styled(Result)`
	.ant-result-title,
	.ant-typography {
		color: ${({ theme }) => theme.typography.color};
	}
`;
