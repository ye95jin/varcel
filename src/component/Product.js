function Product({propsValue:{id, title, sub, image}}) {

	// console.log(props);	
	return (
		<li>
			<a href="">
					{/* <div className="photo"><img src={"/images/"+image} alt={"port"+(id+1)}/></div> */}
					<div className="photo"><img src={`/images/${image}`} alt={`port${id+1}`}/></div>
				<div className="desc">
					<dl>
						<dt>{title}</dt>
						<dd>{sub}</dd>
					</dl>
				</div>
			</a>
		</li>
	);
}
export default Product;