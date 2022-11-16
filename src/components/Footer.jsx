import facebook from "../images/facebook.svg";
import insta from "../images/instagram.svg";
import twt from "../images/twitter.svg";
import logo from "../images/logo-foot.svg";
import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer">
			<div className="social">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>

				<div className="ssimg">
					<img src={facebook} alt="" />
					<img src={twt} alt="" />
					<img src={insta} alt="" />
				</div>
				<p className="cc">
					{" "}
					<FaCopyright /> 2022 Metabnb
				</p>
			</div>
			<div>
				<h6>Community</h6>
				<div className="com">
					<a href="/">NFT</a>
					<a href="/">Tokens</a>
					<a href="/">Landlords</a>
					<a href="/">Discord</a>
				</div>
			</div>
			<div>
				<h6>Places</h6>
				<div className="com">
					<a href="/">Castle</a>
					<a href="/">Farms</a>
					<a href="/">Beach</a>
					<a href="/">Learn more</a>
				</div>
			</div>
			<div>
				<h6>About us</h6>
				<div className="com">
					<a href="/">Road map</a>
					<a href="/">Creators</a>
					<a href="/">Career</a>
					<a href="/">Contact us</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
