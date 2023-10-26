import "./SimpleButton.css"

function SimpleButton({ content, color }) {
	return (
		<button className={`simple-button ${color}-button`}>
			{content}
		</button>
	);
}

export default SimpleButton;
