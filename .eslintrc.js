/**
 * @description 该插件主要为了方便配置Eslint, 有属性提示
 * @description This plugin is mainly for the convenience of configuring Eslint, with attribute prompts
 */

// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	// 禁止继续查找父级目录
	// Forbid to continue to look up the parent directory
	root: true,
	// 支持环境
	// Support environment
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	// 共享设置
	// Common settings
	settings: {
		react: {
			flowVersion: '0.53',
			version: 'detect',
		},
	},
	// Eslint默认处理es5, 使用该配置修改相关配置
	// Eslint handles es5 by default, use this configuration to modify the relevant configuration
	parserOptions: {
		// 指定解析器
		// Specify the parser
		parser: '@typescript-eslint/parser',
		// 指定ES版本
		// Specify the ES version
		ecmaVersion: 2020,
		// 设置源类型, 为module (代码是模块化)
		// Set the source type to module (the code is modular)
		sourceType: 'module',
		jsxPragma: 'React',
		ecmaFeatures: {
			jsx: true,
		},
	},
	// 继承其他规则
	// Inherit other rules
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	plugins: ['react-hooks'],
	// 规则
	// Rules
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		// 函数和类方法需要有明确的返回类型
		// Functions and class methods need to have explicit return types
		'@typescript-eslint/explicit-function-return-type': 'error',
		// 不允许使用any类型
		// Type any is not allowed
		'@typescript-eslint/no-explicit-any': 'off',
		// 不允许使用require语句, 除非在导入语句中。
		// Require statements are not allowed, except in import statements.
		'@typescript-eslint/no-var-requires': 'warn',
		// 不允许空函数
		// Empty functions are not allowed
		'@typescript-eslint/no-empty-function': 'off',
		// 强制自定义大小写
		// Force custom case
		'vue/custom-event-name-casing': 'off',
		// 禁止在变量定义之前使用它们
		// Disallow using variables before they are defined
		'no-use-before-define': 'error',
		// TS下变量被定义之前, 不允许使用这些变量
		// Before variables are defined under TS, these variables are not allowed to be used
		'@typescript-eslint/no-use-before-define': 'error',
		// 禁止使用@ts-<指令>注释, 或要求在指令后进行描述
		// Do not use @ts-<directive> comments, or require description after directive
		'@typescript-eslint/ban-ts-comment': 'warn',
		// 禁止使用特定类型
		// Disallow specific types
		'@typescript-eslint/ban-types': 'off',
		// 不允许使用 ! 后缀操作符的非空断言。
		// Not allowed ! Non-null assertion for postfix operators.
		'@typescript-eslint/no-non-null-assertion': 'warn',
		// 要求在导出的函数和类的公共类方法上明确返回和参数类型
		// Require explicit return and parameter types on public class methods of exported functions and classes
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		// TS下打开不允许未使用的变量(并且阻止代码运行)
		// Open under TS does not allow unused variables (and prevents code from running)
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				// 指定字符不需要检测
				// The specified character does not need to be detected
				argsIgnorePattern: '^_',
				// 指定正则匹配字不检测
				// The specified character does not need to be detected
				varsIgnorePattern: '^_',
			},
		],
		// 开不允许未使用的变量(并且阻止代码运行)
		// ON disallows unused variables (and prevents code from running)
		'no-unused-vars': [
			'error',
			{
				// 指定字符不需要检测
				// The specified character does not need to be detected
				argsIgnorePattern: '^_',
				// 指定正则匹配字不检测
				// The specified character does not need to be detected
				varsIgnorePattern: '^_',
			},
		],
		// 强制在 function的左括号之前使用一致的空格
		// Enforce consistent whitespace before function's opening parenthesis
		'space-before-function-paren': 'warn',

		// React 相关
		// React related

		// 防止缺少displayName命名
		// Prevent missing displayName naming
		'react/display-name': 'warn',
		// 防止 JSX 上下文提供程序值采用会导致不必要的重新渲染的值。
		// Prevent JSX context provider values from taking values that would cause unnecessary re-renders.
		'react/jsx-no-constructed-context-values': 'warn',
		// 指定props类型
		// Specify the props type
		'react/prop-types': 'off',
	},
});
