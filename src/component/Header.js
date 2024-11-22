import Logo from "./Logo";
import Navigation from "./Navigation";
import Keyvisual from "./Keyvisual";
// 데이터가 필요한 부분에서 로딩 
import data from "../data";

function Header() {
	return (
		<header id="header">
			<div className="menu_zone">
				<div className="menu_zone_inner">
					< Logo />
					< Navigation id="gnb" />
				</div>
				<div className="mobile">
					< Navigation id="m_gnb" />
				</div>
				<a className="tab" href=""><span>tab</span></a>
				<div className="dim"></div>
			</div>
			< Keytext />
			< Keyvisual />
		</header>
		);
}

function Keytext(){
	let {keytext}=data;

	return (
		<div className="text_zone">
			<p>{keytext.main}</p>
			<h2>{keytext.sub.h2}</h2>
			<span>{keytext.sub.span}</span>
			<a href="" className="more">View Our Project</a>
		</div>
	);
}

export default Header;