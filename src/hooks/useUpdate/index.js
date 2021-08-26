import { useState } from "react";

const useUpdate = () => {
	const [, setFlag] = useState();
	const update = () => {
		setFlag(Date.now());
	};

	return update;
};

export default useUpdate;

/**
 * 如果想让组件重新渲染, 需要更新 state, 但有时 state 是没必要更新的
 * 不能仅仅为了让组件会重新渲染而强制让一个 state 做无意义的更新
 * 所以这时自定义一个更新的hooks来优雅的实现组件的强制更新
 * 
 * 案例:
 * const Home = (props) => {
 *   const update = useUpdate();
 *   
 *   return (<div> 
 *     {Date.now()}
 *     <div> <button onClick={update}>update</button> </div>
 *   </div>);
 * }
 * 
 */
