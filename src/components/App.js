import React, { Component } from "react";
import "../styles/App.css";
import MarkdownEditor from "./MarkdownEditor";
import MarkdownPreview from "./MarkdownPreview";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: defaultMarkdown
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div className="app">
				<div className="app-markdown">
					<MarkdownEditor
						handleChange={this.handleChange}
						defaultMarkdown={defaultMarkdown}
					/>
					<MarkdownPreview markdown={this.state.value} />
				</div>
				<div className="app-footer">
					<h6 className="app-footer-copyright">
						Mark-It, created by{" "}
						<a href="https://github.com/aroger7">Adam Rogers</a>
					</h6>
				</div>
			</div>
		);
	}
}

export default App;

const defaultMarkdown = `We can do so many cool things with Markdown, like

# Create
## All
### Sorts
#### Of
##### Heading
###### Levels
In A Few
==
Different ways
---

**Boldly** go where *no one* has gone before!

1. Make ordered lists
1. With many items
  * With some sub items of their own!
\n
* Or introducing a little anarchy with unordered lists
	* And chaotic sub items!

[Link to interesting places](http://www.adamrogers.ca)

> Quote cool people
> (In blocks!)

\`\`\`html
<h1>Add blocks of code to your heart's content</h1>
<p>Hello World!</p>
\`\`\`

Or maybe just \`<span>inline</span>\`

| And | Organize | Things |
| --- | --- | --- |
| Into | Neat | Tables |

Is your mind blown yet?

![This would have helped if it had loaded](https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif "Maybe this will help")

Or maybe just [check out all the other fun stuff you can do](https://guides.github.com/features/mastering-markdown/)`;
