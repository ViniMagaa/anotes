import { BiSolidMoon } from "react-icons/bi";

import "./Header.css";
import { useContext } from "react";
import NotesContext from "../../context/NotesContext";

function Header() {
	const { setIsFormNewNoteVisible } = useContext(NotesContext);

	function toggleMenu() {
		const nav = document.getElementById("nav-bar");
		nav.classList.toggle("active");
	}

	function handleCreateNote() {
		setIsFormNewNoteVisible(true);
	}

	return (
		<header>
			<h1>aNotes</h1>
			<nav id="nav-bar">
				<button className="mode">
					<BiSolidMoon />
				</button>
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
					<li>Compartilhar</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
