import styled from 'styled-components';

export const CommonSkeletonStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  

    .ant-typography {
		color: ${({ theme }) => theme.typography.color};
	}
`;
