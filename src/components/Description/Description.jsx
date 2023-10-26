import ButtonCreateNote from "../ButtonCreateNote/ButtonCreateNote";

import "./Description.css";

function Description() {
	return (
		<div className="description">
			<h2>
				Gerencie suas <span>anotações</span> em um só lugar.
			</h2>
			<ButtonCreateNote />
		</div>
	);
}

export default Description;
