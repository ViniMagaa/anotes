import "./NoteColor.css";

function NoteColor({ onColorChange }) {
	const colors = ["yellow", "blue", "pink", "green"];

	return (
		<div>
			<strong>Cor da Nota:</strong>
			<div className="colors-container">
				{colors.length > 0 &&
					colors.map((color, index) => {
						return (
							<div className="container-box" key={index}>
								<input
									type="radio"
									name="color"
									id={`${color}-box`}
									className="box"
									defaultChecked={color === "yellow" ? true : false}
									onClick={() => onColorChange(color)}
								/>
								<label
									htmlFor={`${color}-box`}
									className={`box ${color}`}
								></label>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default NoteColor;
