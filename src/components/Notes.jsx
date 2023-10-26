import React, { useState, useEffect } from "react";

import Note from "./Note";

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
		<section>
			{notes.length > 0 &&
				notes.map((note) => (
					<Note title={note.title} content={note.content} color={note.color} />
				))}
		</section>
	);
}

export default Notes;
