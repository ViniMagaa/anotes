import "./SimpleButton.css";

function SimpleButton({ content, color, handleClick }) {
	return (
		<button className={`simple-button ${color}-button`} onClick={handleClick}>
			{content}
		</button>
	);
}

export default SimpleButton;
