// useEffect 라이브러리는 화면 로딩 후의 상황을 만들 수 있습니다. 
//useEffect 라이브러리를 불러옵니다. 
import { useEffect } from "react"; 

function Lifecycle(){
	console.log("component in")

	// useEffect의 사용 방법은 메서드입니다. 
	// useEffect(완료 함수)
	//useEffect(function(){ // window.addEventListener("load",function(){});
	useEffect(()=> {
		console.log("userEffect");
	});

	let titleFn=()=>{
		console.log("click");
	}

	let h2Style={
		lineHeight: "150%",
		color: "#f90"
	};

	return(
		<h2 className="title" style={h2Style} onClick={titleFn}>Life cycle</h2>
	);
}

export default Lifecycle;