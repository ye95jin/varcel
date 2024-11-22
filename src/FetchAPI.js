import { error } from 'jquery';
import { useState, useEffect } from 'react';

function FetchAPI(){
	// Fetch Object 정보
	// error: null, 에러인지 아닌지에 대한 정보
	// isLoaded: false, 로딩이 됐는지 아닌지에 대한 정보
	// data: [], 데이터 정보 

	// 로딩이 되면 state 정보를 바꿀 겁니다. 정보가 바뀌면 화면을 다시 그려야 하므로 state를 사용합니다.
	// state의 내용은 Fetch Object 내용을 따라서 만들어 줍니다.
	let [state, setState] = useState({
		error: null,
		isLoaded: false,
		data: null
	});

	//let [variables, setVar] = useState([]);

	useEffect(() => {
		//setVar(["one","two"]);

		fetch("/data/data.json")
		// javascript 방식의 비동기 코드
		// then() 실행문이 완성되고 다음 코드로 실행됩니다.

		// 원시 데이터를 객체 형식으로 바꿔줍니다.
		.then(res => res.json())

		// result() : 성공 , error() : 실패
		.then(
			res => {
				setState({
					error: null,
					isLoaded: true,
					data: res.data
				});
			},
			err => {
				// Fetch Object를 그대로 대입, error에 대한 정보를 담습니다.
				setState({
					error: error,
					isLoaded: true,
					data: []
				});
			}
		
		);

}, []); // state 정보는 어떤것도 업데이트 하지 않습니다.
	// FetchAPI() > return() > useEffect() > fetch() > then() > setState() > return() 순서로 실행됩니다.

	// 콜백 스테이트값을 등록하지 않으면 다음과 같습니다.
	// default : },[state]); 

	let { error, isLoaded, data } = state;

	console.log(error, isLoaded, data);

	if(error){
		return(
			<div>
				Error: {error.message}
			</div>
		);
	}

	if(!isLoaded){
		return(
			<div>
				Loading...
			</div>
		);
	}
	else{
		return(
			<ul>
				{
					data.map((d,i) => (
						<li key={i+1}>{d.name}:{d.price}</li>
					))
				}
			</ul>
		);
	}

}

export default FetchAPI;