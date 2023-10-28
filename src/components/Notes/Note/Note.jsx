import { useContext, useState } from "react";

import { AiOutlineCheckSquare, AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

import NoteColor from "../../NoteColor/NoteColor";
import SimpleButton from "../../SimpleButton/SimpleButton";

import NotesContext from "../../../context/NotesContext";
import "./Note.css";

function Note({ id, title, content, noteColor }) {
	const [color, setColor] = useState(noteColor);
	const [isContentEditable, setIsContentEditable] = useState(false);
	const { notes, setNotes } = useContext(NotesContext);

	function handleColorChange(newColor) {
		setColor(newColor);
		notes[id].color = newColor;
	}

	function deleteNote() {
		const newNotesData = notes.filter((note) => note.id !== id);
		setNotes(newNotesData);
		localStorage.setItem("notes-data", JSON.stringify(newNotesData));
	}

	function editNote() {
		const editableTitle = document.getElementById(`${id}-title`);
		const editableContent = document.getElementById(`${id}-content`);

		if (!editableContent.isContentEditable) {
			setIsContentEditable(true);
			editableTitle.contentEditable = true;
			editableContent.contentEditable = true;
			editableTitle.focus();
		} else {
			setIsContentEditable(false);
			editableTitle.contentEditable = false;
			editableContent.contentEditable = false;

			title = editableTitle.textContent;
			content = editableContent.textContent;

			const newNotesData = notes;
			newNotesData[id].title = title;
			newNotesData[id].content = content;
			setNotes(newNotesData);
			localStorage.setItem("notes-data", JSON.stringify(newNotesData));
		}
	}

	return (
		<div className={`note ${color}-content`}>
			<div className={`note-title ${color}-title`}>
				<h1 id={`${id}-title`}>{title}</h1>
			</div>
			<div className="note-content">
				<p id={`${id}-content`}>{content}</p>
				<div className="action-buttons">
					{isContentEditable && (
						<NoteColor onColorChange={handleColorChange} defaultColor={color} />
					)}
					<SimpleButton
						content={!isContentEditable ? <BiEdit /> : <AiOutlineCheckSquare />}
						color={color}
						handleClick={editNote}
					/>
					{!isContentEditable && (
						<SimpleButton
							content={<AiOutlineDelete />}
							color={color}
							handleClick={deleteNote}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Note;
