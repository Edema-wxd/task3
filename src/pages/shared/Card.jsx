import { FaStar } from "react-icons/fa";

function Card({ children }) {
	return (
		<div className="card">
			{children}
			<div className="imgtxt">
				<div>
					<p>Desert king</p>
					<p>2345km away</p>
				</div>
				<div className="r">
					<p className="bld">1MBT per night</p>
					<p>available for 2 weeks stay</p>
				</div>
			</div>
			<div className="star">
				<FaStar />
				<FaStar />
				<FaStar />
				<FaStar />
				<FaStar />
			</div>
		</div>
	);
}

export default Card;
