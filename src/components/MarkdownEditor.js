import React, { Component } from "react";
import "../styles/MarkdownEditor.css";

const MarkdownEditor = ({ handleChange, defaultMarkdown }) => {
	return (
		<form className="markdown-editor">
			<textarea
				className="markdown-editor-text"
				type="text"
				onChange={handleChange}
				defaultValue={defaultMarkdown}
			/>
			<h1>Editor</h1>
		</form>
	);
};

export default MarkdownEditor;
