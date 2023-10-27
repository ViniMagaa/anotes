import React, { useContext, useEffect } from "react";
import NotesContext from "../../context/NotesContext";

import Note from "./Note/Note";

import "./Notes.css";

function Notes() {
	const { notes, setNotes } = useContext(NotesContext);

	window.addEventListener("storage", (e) => {
		if (e.key === "notes-data") {
			const updatedNotes = JSON.parse(e.newValue);
			setNotes(updatedNotes);
		}
	});

	useEffect(() => {
		const initialNotes =
			localStorage.length > 0
				? JSON.parse(localStorage.getItem("notes-data"))
				: [];

		setNotes(initialNotes);
	}, [setNotes]);

	return (
		<section id="notes">
			<h3>Suas notas</h3>
			<div className="notes-container">
				{notes.length && notes.length > 0 ? (
					notes.map((note, index) => (
						<Note
							id={note.id}
							title={note.title}
							content={note.content}
							color={note.color}
							key={index}
						/>
					))
				) : (
					<div>
						<p>
							Você não possui notas. Adicione uma clicando no botão "Criar
							nota".
						</p>
					</div>
				)}
			</div>
		</section>
	);
}

export default Notes;
