import "./ButtonCreateNote.css";

function ButtonCreateNote({ handleClick = () => {} }) {
	return (
		<button type="submit" className="create-note" onClick={handleClick}>
			Criar nota
		</button>
	);
}

export default ButtonCreateNote;
