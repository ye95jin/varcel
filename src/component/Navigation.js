import data from "../data";
function Navigation(props) {
	// console.log(props);

	let {id} = props;
	let {navigation}=data;

	return (
		<nav id={id}>
			<ul>
				{/* <li><a href="#header">HOME</a></li>
				<li><a href="#business">BUSINESS</a></li>
				<li><a href="#portfolio">PORTFOLIO</a></li>
				<li><a href="#service">SERVICE</a></li>
				<li><a href="#contact">CONTACT</a></li> */}
				{
					navigation.map((d, i) =>
						<li key={i}><a href={d.href}>{d.text}</a></li>
					)
				}
			</ul>
		</nav>
	);
}

export default Navigation;