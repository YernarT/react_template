/**
 * commit message 格式:
 * git commit -m <type>[optional scope]: <description>
 *
 * type: 用于说明提交的改动类型, 只允许使用以下标识
 * optional scope: 可选的修改范围, 用于标识提交主要涉及到代码中哪个模块
 * description: 描述提交的主要内容, 做到言简意赅, 不超过50字符且不加句号
 *
 * feat (feature): 新特性, 新功能
 * fix: 修改 bug
 * update: 更新某功能
 * perf (performance): 优化相关, 比如提升性能, 体验
 * docs (documentation): 文档修改
 * style: 代码格式修改, 注意不是 css
 * refactor: 代码重构
 * revert: 回滚到上一个版本
 * ci: 持续集成修改
 * chore: 其他修改, 如: 对项目构建或者依赖的改动
 */

module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			'error',
			'always',
			[
				'feat',
				'fix',
				'update',
				'perf',
				'docs',
				'style',
				'refactor',
				'revert',
				'ci',
				'chore',
			],
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 72],
	},
};
