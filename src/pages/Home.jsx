import Card from "./shared/Card";
import mtnftimg from "../images/mtnftimg.svg";
import mb from "../images/mbtoken.svg";
import meta from "../images/metamask.svg";
import op from "../images/opensea.svg";
import timg from "../images/timg.png";
import img1 from "../images/Frame1.png";
import img2 from "../images/Frame-1.png";
import img3 from "../images/Frame-2.png";
import img4 from "../images/Frame-3.png";
import img5 from "../images/Frame-4.png";
import img6 from "../images/Frame-5.png";
import img7 from "../images/Frame-6.png";
import img8 from "../images/Frame-7.png";

function Home() {
	return (
		<>
			<div className="tt">
				<div className="ttxt">
					<h1>
						Rent a <span className="purp">Place</span> away from
						<span className="purp"> Home</span> in the{" "}
						<span className="purp">Metaverse</span>
					</h1>
					<p className="ttpt">
						we provide you access to luxury and affordable houses in the
						metaverse, get a chance to turn your imagination to reality at your
						comfort zone
					</p>
					<input
						className="srchhome"
						type="search"
						name=""
						id=""
						placeholder="Search for location"
					/>
				</div>
				<div className="ttimg">
					<img src={timg} alt="" />
				</div>
			</div>
			<div className="bb">
				<div>
					<img src={mb} alt="" />
				</div>
				<div>
					<img src={meta} alt="" />
				</div>
				<div>
					<img src={op} alt="" />
				</div>
			</div>
			<h4 className="hca">Inspiration for your next adventure</h4>
			<div className="cardarray">
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
			</div>

			<div className="mtnft">
				<div className="mtnfttxt">
					<h4>Metabnb NFTs</h4>
					<p className="mtp">
						Discover our NFT gift cards collection. Loyal customers gets amazing
						gift cards which are traded as NFTs. These NFTs gives our customers
						access to loads of our exclusive services.
					</p>

					<button className="mtbtn">Learn more</button>
				</div>
				<div className="mtnftimg">
					<img src={mtnftimg} alt="" />
				</div>
			</div>
		</>
	);
}

export default Home;
