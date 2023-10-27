import { useState, useEffect } from "react";

import NoteColor from "../NoteColor/NoteColor";
import ButtonCreateNote from "../ButtonCreateNote/ButtonCreateNote";

import "./FormNewNote.css";

import { useContext } from "react";
import NotesContext from "../../context/NotesContext";

function FormNewNote() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [color, setColor] = useState("");

	const [haveTitle, setHaveTitle] = useState(false);
	const [haveContent, setHaveContent] = useState(false);

	const { isFormNewNoteVisible, setIsFormNewNoteVisible } =
		useContext(NotesContext);
	const { notes, setNotes } = useContext(NotesContext);

	const errorTitle = document.getElementById("error-title");
	const errorContent = document.getElementById("error-content");

	useEffect(() => {
		const formNewNote = document.getElementById("form-new-note");
		if (formNewNote) {
			if (isFormNewNoteVisible) {
				formNewNote.style.display = "grid";
				errorContent.style.display = "none";
				errorTitle.style.display = "none";
			} else {
				formNewNote.style.display = "none";
			}
		}
	}, [isFormNewNoteVisible, errorContent, errorTitle]);

	function handleClose() {
		setTitle("");
		setContent("");
		setHaveTitle(false);
		setHaveContent(false);
		setIsFormNewNoteVisible(false);
	}

	function addNote(e) {
		e.preventDefault();

		errorContent.style.display = "none";
		errorTitle.style.display = "none";

		if (!haveTitle) {
			errorTitle.style.display = "block";
			if (!haveContent) {
				errorContent.style.display = "block";
				return;
			} else return;
		} else if (!haveContent) {
			errorContent.style.display = "block";
			return;
		} else {
			const newNoteData = {
				id: notes.length,
				title,
				content,
				color,
			};

			setNotes([newNoteData, ...notes]);
			localStorage.setItem(
				"notes-data",
				JSON.stringify([newNoteData, ...notes])
			);

			// close form
			handleClose();
		}
	}

	function handleColorChange(color) {
		setColor(color);
		const containerNote = document.getElementById("container-form-note");
		const containerCloseForm = document.getElementById("container-close-form");
		containerNote.style.backgroundColor = `var(--light-${color})`;
		containerCloseForm.style.backgroundColor = `var(--medium-${color})`;
	}

	return (
		<div className="max-container-form" id="form-new-note">
			<div className="container-form" id="container-form-note">
				<div className="close-form" id="container-close-form">
					<button id="close" onClick={handleClose}>
						X
					</button>
				</div>
				<form className="form" onSubmit={addNote}>
					<h1>Crie sua anotação</h1>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Título da nota"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
							if (e.target.value !== "") {
								setHaveTitle(true);
							} else {
								setHaveTitle(false);
							}
						}}
					/>
					<p id="error-title" className="error-form">
						Adicione um título
					</p>
					<textarea
						name="content"
						id="content"
						rows="10"
						placeholder="Conteúdo da nota"
						value={content}
						onChange={(e) => {
							setContent(e.target.value);
							if (e.target.value !== "") {
								setHaveContent(true);
							} else {
								setHaveContent(false);
							}
						}}
					></textarea>
					<p id="error-content" className="error-form">
						Adicione um conteúdo
					</p>
					<NoteColor onColorChange={handleColorChange} />
					<ButtonCreateNote handleClick={addNote} />
				</form>
			</div>
		</div>
	);
}

export default FormNewNote;
