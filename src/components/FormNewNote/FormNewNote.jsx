import NoteColor from "../NoteColor/NoteColor";
import ButtonCreateNote from "../ButtonCreateNote/ButtonCreateNote";

import "./FormNewNote.css";

function FormNewNote() {
	return (
		<div className="max-container-form">
			<div className="container-form">
				<div className="close-form">
					<button id="close">X</button>
				</div>
				<form className="form">
					<h1>Crie sua anotação</h1>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Título da nota"
					/>
					<textarea
						name="content"
						id="content"
						rows="10"
						placeholder="Conteúdo da nota"
					></textarea>
					<NoteColor />
					<ButtonCreateNote />
				</form>
			</div>
		</div>
	);
}

export default FormNewNote;
