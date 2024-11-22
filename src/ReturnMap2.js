import database from "./database";

function ReturnMap2() {
	let ulStyle = {
		marginTop: 15,
	};

	let liStyle = {
		lineHeight: 1.8
	};

	// console.log(database);

	// const original2 = [
	// 	{ idx: 1, text: "member1" },
	// 	{ idx: 2, text: "member2" },
	// 	{ idx: 3, text: "member3" },
	// ];	

	// console.log(original2[0].text);

	// const data=database.map((d) => 
	// 	<li key={d.idx} style={liStyle}>{d.text}</li>
	// );

	return (
		<ul style={ulStyle}>
			{/* <li style={liStyle}>member1</li>
			<li style={liStyle}>member2</li>
			<li style={liStyle}>member3</li> */}
			{ 
				database.map( d => 
					<li key={d.idx} style={liStyle}>{d.text}</li>
				) 
			}
		</ul>
	);
}

export default ReturnMap2;