/**
 * JS 版本睡眠函数, 参考 Python的 time.sleep()
 * 
 * 此处只是一个案例, 根据实际的项目需求自行修改
 * 有更好的意见可以提 issue, pr
 * Github地址: https://github.com/YernarT/quick-start-for-react
 */

export default async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
