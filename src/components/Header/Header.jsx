import { useContext } from "react";

import NotesContext from "../../context/NotesContext";
import ButtonToggleMode from "./ButtonToggleMode/ButtonToggleMode";
import "./Header.css";

function Header() {
	const { setIsFormNewNoteVisible } = useContext(NotesContext);

	function toggleMenu() {
		const nav = document.getElementById("nav-bar");
		nav.classList.toggle("active");
	}

	function handleCreateNote() {
		setIsFormNewNoteVisible(true);
	}

	function copyClipBoard() {
		navigator.clipboard.writeText(document.location.toString());
		alert("Link copiado!")
	}

	return (
		<header>
			<h1>aNotes</h1>
			<nav id="nav-bar">
				<ButtonToggleMode />
				<div className="hamburger" onClick={toggleMenu}>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<ul>
					<li onClick={handleCreateNote}>Criar uma nota</li>
					<li>
						<a href="#notes">Minhas notas</a>
					</li>
					<li onClick={copyClipBoard}>Compartilhar</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
