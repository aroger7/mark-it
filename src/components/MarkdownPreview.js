import React from "react";
import marked from "marked";
import "../styles/MarkdownPreview.css";
import "github-markdown-css/github-markdown.css";

const MarkdownPreview = ({ markdown }) => {
	return (
		<div className="markdown-preview">
			<div
				className="markdown-preview-text markdown-body"
				dangerouslySetInnerHTML={{
					__html: marked(markdown, {
						highlight: code =>
							require("highlight.js").highlightAuto(code).value
					})
				}}
			/>
			<h1>Preview</h1>
		</div>
	);
};

export default MarkdownPreview;
