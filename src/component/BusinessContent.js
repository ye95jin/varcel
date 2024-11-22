import data from "../data";

function BusinessContent() {
	let {business}=data;	
	return (
		<div className="content">
			<ul>
				{
					business.map((d,i)=>
						<BusinessList key={i} propsValue={d} />
					)
				}
			</ul>
		</div>
	);
}

function BusinessList(props) {
	// console.log(props.propsValue);

	let {path, alt, desc}=props.propsValue;

	// console.log(path, alt, desc);

	return (
		<li>
			<div className="icon"><a href=""><img src={`/images/${path}`} alt={alt}/></a></div>
			<div className="desc">
				<dl>
					<dt>{desc.dt}</dt>
					{
						desc.dd.map((d, i)=>
							<dd key={i}>{d}</dd>
						)	
					}
				</dl>
			</div>
		</li>
	);
}

export default BusinessContent;