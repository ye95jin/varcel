function ReturnMap1() {
	let ulStyle = {
		marginTop: 15,
		padding:20
	};

	let liStyle = {
		lineHeight: 1.8,
	};

	// JavaScript 에서는 에러가 발생합니다.
	// React 에서는 에러가 발생하지 않습니다. JSX Object가 있기 때문입니다. 
	// React에서는 배열을 통해 HTML 구현합니다.
	// 동적으로 구현할때, 같은 태그가 반복 될 경우에는 key를 사용해야 합니다.
	// let forArray = [
	// 	<li key={1} style={liStyle}>React</li>,
	// 	<li key={2} style={liStyle}>18.2.0</li>,
	// 	<li key={3} style={liStyle}>Array Map</li>
	// ];

	const data = ["React", "18.2.0", "Array Map"];

	// let forEachArray = [];

	// data.forEach((item, i) => {
	// 	forEachArray.push(
	// 		<li key={i} style={liStyle}>{item}</li>
	// 	);
	// });

	// let mapArray=data.map((item, i) => <li key={i} style={liStyle}>{item}</li>);

	function myFn1(){
		return "myFn1";
	}

	let returnData=myFn1();

	let myFn2 = function(){
		return "myFn2";
	};

	returnData=myFn2();

	let myFn3 = function(str){
		return str;
	};

	returnData=myFn3("myFn3");

	let myFn4= () => {
		return "myFn4";
	};

	returnData=myFn4();

	let myFn5= (str,num) =>  console.log(str+ num);

	console.log(myFn5("myFn5",5));

	// => : function 키워드 대신에 작성
	// React JSX표현식, 중괄호에선 function 키워드 사용 불가

	// {}: 실행식이 한줄일 경우 return 키워드 생략 가능
	// return : 실행식 중괄호가 생략되면 return을 사용할 수 없습니다.  

	// let myFn6= (str,num) => {return str+num;};
	let myFn6= (str,num) => str+num;


	// jSX : React에서 HTML을 구현하기 위한 문법


  return (
	<ul style={ulStyle}>
		{/* 	
		<li style={liStyle}>React</li>
		<li style={liStyle}>18.2.0</li>
		<li style={liStyle}>Array Map</li> 
		*/}

		{
			data.map((item, i) => <li key={i} style={liStyle}>{item}</li>)
		}
	</ul>
  );
}	

export default ReturnMap1;