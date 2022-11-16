import logoh from "../images/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import metma from "../images/cwmm.png";
import waco from "../images/cwwc.png";
import chev from "../images/chev.svg";
import x from "../images/x.svg";

function Header() {
	const [openMenu, setOpenMenu] = useState(false);
	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<>
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
				<button onClick={toggleMenu} className="cwbtn">
					Connect wallet
				</button>
			</div>
			{openMenu ? (
				<>
					<div className="connect">
						<div className="tit">
							<h3>Connect Wallet</h3>
							<img onClick={toggleMenu} src={x} alt="" />
						</div>
						<div className="wall">
							<p className="swn">Choose your preferred wallet:</p>
							<div className="sw">
								<img src={metma} alt="" />
								<img src={chev} alt="" />
							</div>
							<div className="sw">
								<img src={waco} alt="" />
								<img src={chev} alt="" />
							</div>
						</div>
					</div>
					<div className="grey"></div>
				</>
			) : null}
		</>
	);
}

export default Header;
