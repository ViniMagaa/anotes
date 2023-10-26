import ButtonCreateNote from "../ButtonCreateNote/ButtonCreateNote";

import "./Description.css";

import { useContext } from "react";
import NotesContext from "../../context/NotesContext";

function Description() {
	const { setIsFormNewNoteVisible } = useContext(NotesContext);

	function handleOnClick() {
		setIsFormNewNoteVisible(true);
	}

	return (
		<div className="description">
			<h2>
				Gerencie suas <span>anotações</span> em um só lugar.
			</h2>
			<ButtonCreateNote handleClick={handleOnClick} />
		</div>
	);
}

export default Description;
