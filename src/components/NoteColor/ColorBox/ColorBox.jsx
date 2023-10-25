import "./ColorBox.css";

function ColorBox({ color }) {
	return (
		<div className="container-box">
			<input
				type="radio"
				name="color"
				id={`${color}-box`}
				key={`${color}-box-key`}
				className="box"
				defaultChecked={color === "yellow" ? true : false}
			/>
			<label htmlFor={`${color}-box`} className={`box ${color}`}></label>
		</div>
	);
}

export default ColorBox;
