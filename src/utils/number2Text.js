/**
 * 测试版 工具函数
 *
 * 欢迎大佬的 issue, pr
 * Github地址: https://github.com/YernarT/react_template
 */

const number2Text = number => {
	// 最终结果
	let result = '',
		stringNumber = number.toString();
	// 小数点的位置 (索引)
	let decimalPointIndex =
		stringNumber.indexOf('.') === -1
			? stringNumber.length
			: stringNumber.indexOf('.');
	// 整/小数部分, 类型 String
	let integerPart = stringNumber.slice(0, decimalPointIndex),
		decimalPart = stringNumber.slice(decimalPointIndex + 1),
		// 计数器
		counter = 1;

	for (let i = integerPart.length - 1; i >= 0; i -= 1) {
		// 每隔三个数字加逗号
		if (counter === 3 && i !== 0) {
			result += `${integerPart[i]},`;
			counter = 0;
		} else {
			result += integerPart[i];
			counter += 1;
		}
	}

	if (decimalPart) {
		result = `${result.split('').reverse().join('')}.${decimalPart}`;
	} else {
		result = result.split('').reverse().join('');
	}

	return result;
};

export default number2Text;
