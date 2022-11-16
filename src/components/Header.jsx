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
					<p className="hbtn">Home</p>
				</Link>
				<Link to="/place">
					<p className="hbtn">Place to stay</p>
				</Link>
				<p className="hbtn">NFTs</p>
				<p className="hbtn">Community</p>
			</div>
			<button className="cwbtn">Connect wallet</button>
		</div>
	);
}

export default Header;
