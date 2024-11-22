function Contact() {
	return (
		<div className="join_form">
			<form>
				<Title />
				<Table />
				<Button />
			</form>
		</div>
	);
}

function Title(){
	return(
		<div className="content_title">
			<h3>선택정보입력</h3>
		</div>
	);
}

function Table() {
	return (
		<div className="input_wrap">
			<table>
				<caption>선택정보입력</caption>
				<tbody>
					<tr>
						<th scope="row">성별</th>
						<td className="gender">
							<label><input type="radio" /> 남</label>
							<label><input type="radio" /> 여</label>
						</td>
					</tr>
					<tr>
						<th scope="row">주소</th>
						<td>
							<div className="member_num">
								<input type="text" className="post_num1" readOnly />
								<button className="post_num1">우편번호</button>
								<label><input type="checkbox" /> 우편 수신동의</label>
							</div>
							<div className="address_txt1">
								<input type="text" className="post_num2" />
								<button className="post_num2">지번주소</button>
							</div>
							<div className="address_txt2">
								<input type="text" className="post_num3" />
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row">전화번호</th>
						<td className="phone">
							<select>
								<option>02</option>
								<option>031</option>
							</select>
							<span> - </span>
							<input type="text" className="phone_num1" />
							<span> - </span>
							<input type="text" className="phone_num1" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function Button() {
	return (
		<div className="btn_zone">
			<input type="submit" value="회원가입" />
			<input type="reset" value="취소" />
		</div>
	);
}

export default Contact;
