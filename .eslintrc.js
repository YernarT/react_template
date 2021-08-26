module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
	},
	"extends": ["eslint:recommended", "plugin:react/recommended"],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
		},
		"ecmaVersion": 12,
		"sourceType": "module",
	},
	"plugins": ["react"],
	"settings": {
		"react": {
			"pragma": "React",
			"version": "detect",
		},
	},
	"rules": {
		// 必须使用 foo === null 或 foo !== null
		"eqeqeq": ["error", "always"],
		// 禁止使用 eval
		"no-eval": "error",
		// 禁止修改原生对象
		"no-extend-native": "error",
		// switch 的 case 内必须有 break, return 或 throw
		"no-fallthrough": "error",
		// 禁止使用没必要的 {} 作为代码块
		"no-lone-blocks": "error",
		// 禁止使用 magic number
		"no-magic-numbers": "off",
		// 禁止使用 \ 来换行字符串
		"no-multi-str": "error",
		// 不允许有空函数, 除非是将一个空函数设置为某个项的默认值
		"no-empty-function": [
			"warn",
			{
				allow: [
					"functions",
					"arrowFunctions",
					"generatorFunctions",
					"methods",
					"generatorMethods",
					"getters",
					"setters",
					"constructors",
				],
			},
		],
		// 禁止解构中出现空 {} 或 []
		"no-empty-pattern": "error",
		// 禁止 for 循环出现方向错误的循环, 如 for (i = 0; i < 10; i--)
		"for-direction": "error",
		// getter 必须有返回值, 并且禁止返回空, 如 return;
		"getter-return": ["error", { allowImplicit: false }],
		// 禁止将常量作为分支条件判断中的测试表达式, 但允许作为循环条件判断中的测试表达式
		"no-constant-condition": ["error", { checkLoops: false }],
		// 禁止在函数参数中出现重复名称的参数
		"no-dupe-args": "error",
		// 禁止在对象字面量中出现重复名称的键名
		"no-dupe-keys": "error",
		// 禁止在 switch 语句中出现重复测试表达式的 case
		"no-duplicate-case": "error",
		// 禁止出现空代码块, 允许 catch 为空代码块
		"no-empty": ["warn", { allowEmptyCatch: true }],
		// 禁止将 catch 的第一个参数 error 重新赋值
		"no-ex-assign": "error",
		// 禁止在 if 代码块内出现函数声明
		"no-inner-declarations": ["error", "both"],
		// 禁止在 RegExp 构造函数中出现非法的正则表达式
		"no-invalid-regexp": "error",
		// 禁止将 Math, JSON 或 Reflect 直接作为函数调用
		"no-obj-calls": "error",
		// 禁止在数组中出现连续的逗号, 如 let foo = [,,]
		"no-sparse-arrays": "error",
		// 禁止在普通字符串中出现模版字符串里的变量形式, 如 "Hello ${name}!"
		"no-template-curly-in-string": "error",
		// 禁止出现难以理解的多行表达式
		"no-unexpected-multiline": "warn",
		// 禁止在 return, throw, break 或 continue 之后还有代码
		"no-unreachable": "error",
		// 禁止在 finally 中出现 return, throw, break 或 continue
		"no-unsafe-finally": "error",
		// 必须使用 isNaN(foo) 而不是 foo === NaN
		"use-isnan": "error",
		// 注释必须符合 jsdoc 的规范
		"valid-jsdoc": "warn",
		// typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
		"valid-typeof": "error",
		// setter 必须有对应的 getter, getter 可以没有对应的 setter
		"accessor-pairs": ["error", { setWithoutGet: true, getWithoutSet: false }],
		// 数组的方法除了 forEach 之外, 回调函数必须有返回值
		"array-callback-return": "error",
		// 在类的非静态方法中, 必须存在对 this 的引用
		"class-methods-use-this": "warn",
		// 禁止直接 new 一个类而不赋值
		"no-new": "error",
		// 禁止使用 new Function, 如 let x = new Function("a", "b", "return a + b");
		"no-new-func": "error",
		// 禁止使用 new 来生成 String, Number 或 Boolean
		"no-new-wrappers": "error",
		// 禁止使用 __proto__
		"no-proto": "error",
		// 禁止重复定义变量
		"no-redeclare": "warn",
		// 禁止在 return 语句里赋值
		"no-return-assign": ["error", "always"],
		// 禁止在 return 语句里使用 await
		"no-return-await": "error",
		// 禁止出现 location.href = 'javascript:void(0)';
		"no-script-url": "error",
		// 禁止将自己赋值给自己
		"no-self-assign": "error",
		// 禁止将自己与自己比较
		"no-self-compare": "error",
		// 禁止 throw 字面量, 必须 throw 一个 Error 对象
		"no-throw-literal": "error",
		// 禁止无用的表达式
		"no-unused-expressions": [
			"error",
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		// 禁止出现没必要的字符串连接
		"no-useless-concat": "error",
		// 禁止使用 void
		"no-void": "warn",
		// 禁止使用 with
		"no-with": "warn",
		// Promise 的 reject 中必须传入 Error 对象, 而不是字面量
		"prefer-promise-reject-errors": "error",
		// parseInt 必须传入第二个参数
		"radix": "warn",

		// 这些规则 ↓ 与变量申明有关 ↓
		// 变量必须在定义的时候赋值, 先定义后赋值很常见
		"init-declarations": "off",
		// 禁止使用保留字作为变量名
		"no-shadow-restricted-names": "error",
		// 禁止使用未定义的变量
		"no-undef": ["error", { typeof: false }],
		// 定义过的变量必须使用
		"no-unused-vars": [
			"warn",
			{
				vars: "all",
				args: "none",
				caughtErrors: "none",
				ignoreRestSiblings: true,
			},
		],
		// 变量必须先定义后使用
		"no-use-before-define": [
			"error",
			{ functions: false, classes: false, variables: false },
		],
		// 禁止直接使用 Buffer
		"no-buffer-constructor": "error",

		// 这些规则 ↓ 与代码风格有关 ↓
		// 一个缩进必须用2个空格替代
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		// 回车格式
		"linebreak-style": ["off", "windows"],
		// 双引号
		"quotes": ["error", "double"],
		// 必须分号
		"semi": ["error", "always"],
		// 配置数组的元素之间的换行格式, 允许一行包含多个元素, 方便大数量的数组的书写
		"array-element-newline": "off",
		// 代码块如果在一行内, 那么大括号内的首尾必须有空格, 比如 function () { alert('Hello') }
		"block-spacing": ["error", "always"],
		// 变量名必须是 camelcase 风格
		"camelcase": [
			"off",
			{
				"properties": "always",
				"ignoreDestructuring": false,
			},
		],
		// 限制变量名长度
		"id-length": ["error", { "min": 2, "max": 40 }],
		// 代码块嵌套的深度禁止超过 5 层
		"max-depth": ["error", 5],
		// 回调函数嵌套禁止超过 3 层, 多了用 async await 替代
		"max-nested-callbacks": ["error", 3],
		// 函数的参数禁止超过 10 个
		"max-params": ["warn", 10],
		// 禁止使用 Array 构造函数
		"no-array-constructor": "warn",
		// 禁止使用嵌套的三元表达式, 比如 a ? b : c ? d : e
		"no-nested-ternary": "warn",
		// 禁止使用 ++ 或 --
		"no-plusplus": "off",
		// 正则表达式必须有括号包起来
		"wrap-regex": "warn",

		// 这些规则 ↓ 与 ES6 (ES2015)有关 ↓
		// 禁止对使用 const 定义的常量重新赋值
		"no-const-assign": "error",
		// 禁止对定义过的 class 重新赋值
		"no-class-assign": "error",
		// constructor 中必须有 super
		"constructor-super": "error",
		//  箭头函数能够省略 return 的时候, 必须省略
		"arrow-body-style": "warn",
		// 禁止重复定义类
		"no-dupe-class-members": "error",
		// 禁止重复 import 模块
		"no-duplicate-imports": "error",
		// 禁止使用 new 来生成 Symbol
		"no-new-symbol": "error",
		// 禁止解构时出现同样名字的的重命名, 如 let { foo: foo } = bar;
		"no-useless-rename": "error",
		// 禁止使用 var
		"no-var": "error",
		// 必须使用 ...args 而不是 arguments, 没必要强制要求
		"prefer-rest-params": "off",
		// 必须使用模版字符串而不是字符串连接
		"prefer-template": "warn",
		// generator 函数内必须有 yield
		"require-yield": "error",
		// ... 的后面禁止有空格
		"rest-spread-spacing": ["error", "never"],
		// import 必须按规则排序
		"sort-imports": "off",
		// 创建 Symbol 时必须传入参数
		"symbol-description": "error",
		// ${name} 内的首尾禁止有空格
		"template-curly-spacing": ["error", "never"],
		//yield* 后面必须要有空格
		"yield-star-spacing": ["error", "after"],
	},
};
