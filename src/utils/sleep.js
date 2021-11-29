/**
 * JS 版本睡眠函数, 参考 Python的 time.sleep()
 * 
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */

export default async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
