import { BiSolidMoon } from "react-icons/bi";

function Header() {
	return (
		<header>
			<h1>aNotes</h1>
			<nav>
				<button className="mode">
					<BiSolidMoon />
				</button>
				<div className="hamburger">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<ul>
					<li>
						<a href="#">Criar uma nota</a>
					</li>
					<li>
						<a href="#">Minhas notas</a>
					</li>
					<li>
						<a href="#">Compartilhar</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
