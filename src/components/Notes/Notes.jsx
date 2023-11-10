import React, { useContext, useEffect } from "react";
import NotesContext from "../../context/NotesContext";

import Note from "./Note/Note";

import "./Notes.css";

function Notes() {
	const { notes, setNotes } = useContext(NotesContext);
	localStorage.setItem("notes-data", localStorage.getItem("notes-data") || []);

	useEffect(() => {
		const storedNotes = localStorage.getItem("notes-data");
		setNotes(storedNotes ? JSON.parse(storedNotes) : []);
	}, [setNotes]);

	window.addEventListener("storage", (e) => {
		if (e.key === "notes-data") {
			setNotes(JSON.parse(e.newValue));
		}
	});

	return (
		<section id="notes">
			<h3>Suas notas</h3>
			<div className="notes-container">
				{notes.length > 0 ? (
					notes.map((note) => (
						<Note
							key={note.id}
							id={note.id}
							title={note.title}
							content={note.content}
							noteColor={note.color}
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
