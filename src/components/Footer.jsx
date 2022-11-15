import facebook from "../images/facebook.svg";
import insta from "../images/instagram.svg";
import twt from "../images/twitter.svg";
import logo from "../images/logo-foot.svg";
import { FaCopyright } from "react-icons/fa";

function Footer() {
	return (
		<div className="footer">
			<div className="social">
				<img src={logo} alt="" />
				<img src={facebook} alt="" />
				<img src={twt} alt="" />
				<img src={insta} alt="" />
				<p className="cc">
					{" "}
					<FaCopyright /> 2022 Metabnb
				</p>
			</div>
			<div className="com">
				<h6>Community</h6>
				<a href="/">NFT</a>
				<a href="/">Tokens</a>
				<a href="/">Landlords</a>
				<a href="/">Discord</a>
			</div>
			<div className="pla">
				<h6>Places</h6>
				<a href="/">Castle</a>
				<a href="/">Farms</a>
				<a href="/">Beach</a>
				<a href="/">Learn more</a>
			</div>
			<div className="abo">
				<h6>About us</h6>
				<a href="/">Road map</a>
				<a href="/">Creators</a>
				<a href="/">Career</a>
				<a href="/">Contact us</a>
			</div>
		</div>
	);
}

export default Footer;
