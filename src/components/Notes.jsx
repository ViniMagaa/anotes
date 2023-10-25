import Note from "./Note";

function Notes() {
	const notas = ["nota1", "nota2", "nota3"];

	return (
		<section>
			{notas.length > 0 &&
				notas.map((nota) => <Note title={nota} content={nota} />)}
		</section>
	);
}

export default Notes;
