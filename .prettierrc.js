module.exports = {
	// 单行可显示的最大字符串长度
	// The maximum string length that can be displayed on a single line
	printWidth: 80,
	// 缩进字节数
	// Indent bytes
	tabWidth: 2,
	// 使用 Tab
	// Use Tab
	useTabs: true,
	// 句尾添加分号
	// Add a semicolon at the end of the sentence
	semi: true,
	// 使用单引号
	// Use single quotes
	singleQuote: true,
	quoteProps: 'preserve',
	// jsx 使用单引号
	// jsx uses single quotes
	jsxSingleQuote: false,
	// 在对象或数组最后一个元素后面是否加逗号
	// Whether to add a comma after the last element of the object or array
	trailingComma: 'all',
	// 在对象或数组括号于文字之间添加空格
	// Add spaces between object or array brackets and literals
	bracketSpacing: true,
	// 在jsx中把 '>' 是否单独放一行
	// Put '>' on a separate line in jsx
	jsxBracketSameLine: true,
	// (x) => {} 箭头函数参数只有一个时是否要有小括号 avoid: 省略括号
	// (x) => {} Whether to have parentheses when there is only one arrow function parameter avoid: omit parentheses
	arrowParens: 'avoid',
	rangeStart: 0,
	rangeEnd: Infinity,
	requirePragma: false,
	insertPragma: false,
	proseWrap: 'preserve',
	htmlWhitespaceSensitivity: 'css',
	// 结尾是 \n \r \n\r auto
	// Ends with \n \r \n\r auto
	endOfLine: 'auto',
};
