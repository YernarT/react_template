/**
 * 睡眠函数, 参考 Python的 time.sleep()
 *
 * 欢迎大佬的 issue, pr
 * Github地址: https://github.com/YernarT/react_template
 */

/**
 * 
 * @param { Number } ms 毫秒
 * 
 * @returns { Promise } ms毫秒后 返回一个成功的 Promise, value为ms
 */
export default async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
