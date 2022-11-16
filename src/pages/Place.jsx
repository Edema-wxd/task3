import Card from "./shared/Card";
import img1 from "../images/Frame1.png";
import img2 from "../images/Frame-1.png";
import img3 from "../images/Frame-2.png";
import img4 from "../images/Frame-3.png";
import img5 from "../images/Frame-4.png";
import img6 from "../images/Frame-5.png";
import img7 from "../images/Frame-6.png";
import img8 from "../images/Frame-7.png";
import img9 from "../images/Frame-8.png";
import img10 from "../images/Frame-9.png";
import img11 from "../images/Frame-10.png";
import img12 from "../images/Frame-11.png";
import img13 from "../images/Frame-12.png";
import img14 from "../images/Frame-13.png";
import img15 from "../images/Frame-14.png";
import img16 from "../images/Frame-15.png";

function Place() {
	return (
		<>
			<div className="locarry">
				<div className="la">
					<p>Resturant</p>
					<p>Cottage</p>
					<p>Castle</p>
					<p>Fantasy city</p>
					<p>Beach</p>
					<p>Cabins</p>
					<p>Off-grid</p>
					<p>Farm</p>
				</div>

				<input
					className="lcsrch"
					type="search"
					name=""
					id=""
					placeholder="Location"
				/>
			</div>

			<div className="cardarray">
				<Card>
					<img src={img5} alt="" />
				</Card>
				<Card>
					<img src={img6} alt="" />
				</Card>
				<Card>
					<img src={img7} alt="" />
				</Card>
				<Card>
					<img src={img8} alt="" />
				</Card>
				<Card>
					<img src={img1} alt="" />
				</Card>
				<Card>
					<img src={img2} alt="" />
				</Card>
				<Card>
					<img src={img3} alt="" />
				</Card>
				<Card>
					<img src={img4} alt="" />
				</Card>
				<Card>
					<img src={img9} alt="" />
				</Card>
				<Card>
					<img src={img10} alt="" />
				</Card>
				<Card>
					<img src={img11} alt="" />
				</Card>
				<Card>
					<img src={img12} alt="" />
				</Card>
				<Card>
					<img src={img13} alt="" />
				</Card>
				<Card>
					<img src={img14} alt="" />
				</Card>
				<Card>
					<img src={img15} alt="" />
				</Card>
				<Card>
					<img src={img16} alt="" />
				</Card>
			</div>
		</>
	);
}

export default Place;
