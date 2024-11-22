import Title from "./Title";
import BusinessContent from "./BusinessContent";
import data from "../data";

function Business () {
	let {title}=data;
  return (
	<section id="business">
			< Title propsValue={title.business} />
			< BusinessContent />
	</section>
  );
}

export default Business;