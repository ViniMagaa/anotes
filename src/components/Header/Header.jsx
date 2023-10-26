import { BiSolidMoon } from "react-icons/bi";

import "./Header.css";

function Header() {
	function toggleMenu() {
		const nav = document.getElementById("nav-bar");
		nav.classList.toggle("active");
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
					<li>
						<a href="/">Cria nota</a>
					</li>
					<li>
						<a href="#notes">Minhas notas</a>
					</li>
					<li>
						<a href="/">Compartilhar</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
