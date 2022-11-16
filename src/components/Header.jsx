import logoh from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img src={logoh} alt="" />
			</Link>
			<div className="hba">
				<Link to="/">
					<p className="hbtn y">Home</p>
				</Link>
				<Link to="/place">
					<p className="hbtn">Place to stay</p>
				</Link>
				<p className="hbtn x">NFTs</p>
				<p className="hbtn x">Community</p>
			</div>
			<button className="cwbtn">Connect wallet</button>
		</div>
	);
}

export default Header;
