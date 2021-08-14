import { useEffect } from "react";

export default function useConsole() {
	useEffect(() => {
		// text style
		let styleTitle1 = `
    font-size: 30px;
    font-weight: 900;
    color: rgb(1,255,255);
    `;
		let styleTitle2 = `
    font-style: oblique;
    font-size:16px;
    color: rgb(1,255,255);
    font-weight: 900;
    `;
		let styleContent = `
    color: rgb(30,150,255);
    `;

		// text content
		let title1 = "🐱‍💻 IT IS IT";
		let title2 = "《 IT IS IT 工作室 》";

		let url = "https://it-is-it.web.com";
		let phoneNumber = "87714526555";
		let content = `
    #招募
    
    要求: 
    1. 热爱, 未来想从事IT方面工作.
    2. 掌握编程基础, 有空闲时间.
    3. 良好的品德, 健康的生活习惯.
     
    WebSite:  ${url} 
    WhatsApp / Telegram:  ${phoneNumber}
    `;

		// output
		console.log(
			`%c${title1} %c${title2} 
          %c${content}`,
			styleTitle1,
			styleTitle2,
			styleContent,
		);
	}, []);
}
