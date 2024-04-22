function NewLineText({ text }) {
	const newText = text.split("/n");
	return newText.map((str) => <p>{str}</p>);
}

export { NewLineText };
