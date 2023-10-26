import { useState } from "react";
import NotesContext from "./NotesContext";

function Provider({ children }) {
	const [isFormNewNoteVisible, setIsFormNewNoteVisible] = useState(false);

	const value = {
		isFormNewNoteVisible,
		setIsFormNewNoteVisible,
	};

	return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export default Provider;
