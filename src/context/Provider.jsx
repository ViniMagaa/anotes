import { useState } from "react";
import NotesContext from "./NotesContext";

function Provider({ children }) {
	const [notes, setNotes] = useState([]);
	const [isFormNewNoteVisible, setIsFormNewNoteVisible] = useState(false);

	const value = {
		notes,
		setNotes,
		isFormNewNoteVisible,
		setIsFormNewNoteVisible,
	};

	return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export default Provider;
