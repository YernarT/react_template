import styled from 'styled-components';
// 公共样式
import { container } from '@/assets/style';

export const HeaderWrap = styled.div`
	${container};

	width: 100%;
	height: 72px;
	background-color: ${({ theme }) => theme.palette.primary};

	overflow: hidden;

	position: fixed;
	top: 0;
	z-index: 900;

	.header {
		height: inherit;

		display: flex;
		align-items: center;
		justify-content: space-between;

		user-select: none;

		/* 网站 Brand */
		.brand {
			display: flex;
			align-items: center;
			gap: 8px;

			.logo {
				width: 52px;
				height: 52px;
				border-radius: ${({ theme }) => theme.shape.borderRadius};

				object-fit: cover;

				@media screen and (max-width: 585px) {
					width: 40px;
					height: 40px;
				}
			}

			.title {
				margin: 0;
				font-size: 1.2rem;
				color: #fff;
			}
		}

		/* 操作栏 */
		.actions {
			margin-left: auto;

			.sign-in {
				display: flex;
				align-items: center;
				gap: 8px;

				span {
					color: #fff;
					
					:hover {
						color: rgba(255, 255, 255, 0.85);
					}				
				}

				svg {
					${({ theme }) => theme.shape.iconAppearance.apply()}
					font-size: 1.2rem;
				}

			}
		}
	}
`;
