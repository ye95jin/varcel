function Title(props) {
	let {h2, p}=props.propsValue;
	
	  return (
		<div className="title">
		<h2>{h2}</h2>
		{/* <p>{p}</p> */}
		<p dangerouslySetInnerHTML={{__html: p}}/>
	</div>
	  );
}

export default Title;