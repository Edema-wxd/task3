import Card from "./shared/Card";

function Place() {
	return (
		<>
			<div className="locarry">
				<button>Resturant</button>
				<button>Cottage</button>
				<button>Castle</button>
				<button>Fantasy city</button>
				<button>Beach</button>
				<button>Cabins</button>
				<button>Off-grid</button>
				<button>Farm</button>

				<input type="search" name="" id="" placeholder="Location" />
			</div>

			<div className="cardarray">
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</div>
		</>
	);
}

export default Place;
