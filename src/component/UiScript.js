import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function UiScript() {

	useEffect(() => {
		let header=document.getElementById("header");
		let menuArea=header.firstElementChild;
		let mobile=menuArea.querySelector(".mobile");
		let tab=menuArea.querySelector(".tab");
		let dim=menuArea.querySelector(".dim");

		let gnb=document.getElementById("gnb");
		let gnbList=gnb.querySelectorAll("ul > li");

		let mobileGnb=document.getElementById("m_gnb");
		let mobileGnbList=mobileGnb.querySelectorAll("ul > li");

		let section=document.querySelectorAll("section");
		let pageList=[header];

		section.forEach(function(item){
			pageList.push(item);
		});

		pageList.forEach(function(item, i){
			gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center",
					end: "bottom 20%",
					onEnter: function(){
						controlMenu(i);
					},
					onEnterBack: function(){
						controlMenu(i);
					}
				}
			});
		});

		function controlMenu(n){
			gnbList.forEach(function(item, i){
				if(i === n){
					gnbList[i].firstElementChild.classList.add("on");
				}
				else{
					gnbList[i].firstElementChild.classList.remove("on");
				}
			});

			if(n !== 0){
				menuArea.classList.add("active");
			}
			else{
				menuArea.classList.remove("active");
			}
		}

		const startTl1=gsap.timeline();

		startTl1.from(".text_zone p", { y: 30, opacity: 0, duration: 0.6 });
		startTl1.from(".text_zone h2", { y: 30, opacity: 0, duration: 0.6 });
		startTl1.from(".text_zone .more", { y: 30, opacity: 0, duration: 0.6 });

		let businessList=document.querySelectorAll("#business li");

		const businessTl=gsap.timeline({
			scrollTrigger: {
				trigger: "#business",
				start: "top center",
				end: "bottom 20%"
			}
		});

		businessList.forEach(function(item, i){
			if(i%2 === 1){
				businessTl.from(item, { y: 100, opacity: 0, duration: 0.5 });
			}
			else{
				businessTl.from(item, { y: -100, opacity: 0, duration: 0.5 });
			}
		});

		tab.addEventListener("click", function(e){
			e.preventDefault();

			mobile.classList.toggle("active");
			tab.classList.toggle("active");
			dim.classList.toggle("active");
		});

		dim.addEventListener("click", function(){
			mobile.classList.remove("active");
			tab.classList.remove("active");
			dim.classList.remove("active");
		});

		window.addEventListener("resize", function(){
			if(window.innerWidth > 720){
				if(mobile.classList.contains("active")){
					mobile.classList.remove("active");
					tab.classList.remove("active");
					dim.classList.remove("active");
				}
			}
		});

		let topPos=0;

		gnbList.forEach(function(item, i){
			gnbList[i].addEventListener("click", function(e){
				e.preventDefault();

				topPos=pageList[i].offsetTop;
				gsap.to(window, { scrollTo: topPos, duration: 0.4 });
			});

			mobileGnbList[i].addEventListener("click", function(e){
				e.preventDefault();

				topPos=pageList[i].offsetTop;
				gsap.to(window, { scrollTo: topPos, duration: 0.4, onComplete: function(){
					mobile.classList.remove("active");
					tab.classList.remove("active");
					dim.classList.remove("active");
				}});
			});
		});
	});
	

  return (
	<>
	</>
  );
}

export default UiScript;