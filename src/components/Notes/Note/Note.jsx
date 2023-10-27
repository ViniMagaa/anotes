import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

import SimpleButton from "../../SimpleButton/SimpleButton";

import "./Note.css";

function Note({ title, content, color }) {
	return (
		<div className={`note ${color}-content`}>
			<div className={`note-title ${color}-title`}>
				<h1>{title}</h1>
			</div>
			<div className="note-content">
				<p>{content}</p>
				<div className="action-buttons">
					<SimpleButton content={<BiEdit />} color={color} />
					<SimpleButton content={<AiOutlineDelete />} color={color} />
				</div>
			</div>
		</div>
	);
}

export default Note;
