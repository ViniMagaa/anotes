import { useState } from "react";

import NoteColor from "../NoteColor/NoteColor";
import ButtonCreateNote from "../ButtonCreateNote/ButtonCreateNote";

import "./FormNewNote.css";

function FormNewNote() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [color, setColor] = useState("yellow");

	function addNote(e) {
		e.preventDefault();
		const notesData =
			localStorage.length > 0
				? JSON.parse(localStorage.getItem("notes-data"))
				: [];

		const newNoteData = {
			title,
			content,
			color,
		};

		notesData.push(newNoteData);

		localStorage.setItem("notes-data", JSON.stringify(notesData));
	}

	function handleColorChange(color) {
		setColor(color);
	}

	return (
		<div className="max-container-form">
			<div className="container-form">
				<div className="close-form">
					<button id="close">X</button>
				</div>
				<form className="form" onSubmit={addNote}>
					<h1>Crie sua anotação</h1>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Título da nota"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						name="content"
						id="content"
						rows="10"
						placeholder="Conteúdo da nota"
						onChange={(e) => setContent(e.target.value)}
					></textarea>
					<NoteColor onColorChange={handleColorChange} />
					<ButtonCreateNote />
				</form>
			</div>
		</div>
	);
}

export default FormNewNote;
