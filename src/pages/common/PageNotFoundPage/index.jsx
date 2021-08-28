import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { pageAtom } from "@recoil";

import { Result, Button } from "antd";

import { i18nTranslate, i18nLocales } from "@i18n";

import { Paragraph, ParagraphWithUnderline } from "./style";

export default function PageNotFoundPage() {
	const [page, setPage] = useRecoilState(pageAtom);

	return (
		<>
			<Result
				status="404"
				title="404"
				subTitle={i18nTranslate("404")}
				extra={<Link to="/">Back Home</Link>}
			/>
			<hr />
			<Paragraph color="red" is3d>
				current language: {page.locale}
			</Paragraph>

			{Object.values(i18nLocales).map(el => (
				<Fragment key={el.code}>
					<Button
						type="primary"
						onClick={() =>
							setPage(Object.assign({}, page, { locale: el.code }))
						}>
						Change Language to {el.text}
					</Button>
					<span>{"  "}</span>
				</Fragment>
			))}

			<hr />

			<ParagraphWithUnderline is3d>
				styled component test
			</ParagraphWithUnderline>
		</>
	);
}
