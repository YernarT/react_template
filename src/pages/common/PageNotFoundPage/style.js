import styled, { css } from "styled-components";

export const Paragraph = styled.p`
	color: ${({ color }) => (color ? color : "#000")};
	${({ is3d }) =>
		is3d
			? css`
					box-shadow: 2px 2px 4px #000;
					border: 2px solid #000;
			  `
			: null}
	&:hover {
		color: blue;
	}
`;

export const ParagraphWithUnderline = styled(Paragraph)`
	text-decoration: underline;
`;
