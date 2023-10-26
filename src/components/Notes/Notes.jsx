import React, { useState, useEffect } from "react";

import Note from "./Note/Note";

import "./Notes.css";

function Notes() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		setNotes(
			localStorage.length > 0
				? JSON.parse(localStorage.getItem("notes-data"))
				: []
		);
	}, []);

	return (
		<section id="notes">
			<h3>Suas notas</h3>
			<div className="notes-container">
				{notes.length > 0 &&
					notes.map((note, index) => (
						<Note
							title={note.title}
							content={note.content}
							color={note.color}
							key={index}
						/>
					))}
			</div>
		</section>
	);
}

export default Notes;
