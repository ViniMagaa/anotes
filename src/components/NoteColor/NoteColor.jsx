import ColorBox from "./ColorBox/ColorBox";

import "./NoteColor.css";

function NoteColor() {
	const colors = ["yellow", "blue", "pink", "green"];

	return (
		<div>
			<strong>Cor da Nota:</strong>
			<div className="colors-container">
				{colors.length > 0 &&
					colors.map((color) => (
						<ColorBox color={color} whatSelectedColor={colors[0]} />
					))}
			</div>
		</div>
	);
}

export default NoteColor;
