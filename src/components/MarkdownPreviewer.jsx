import { useEffect, useState } from "react";
import Editor from "./Editor"
import Previewer from "./Previewer"
import FooterBar from "./FooterBar";
import { marked } from "marked";
import '../styles/markdownPreviewer.css';


function MarkdownPreviewer() {

    const [text, setText] = useState();
    const [markedText, setMarkedText] = useState('');

    const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

    useEffect((event) => {
        setText(initialText);
        setMarkedText(marked.parse(initialText));
    }, []);

    const handleChange = (event) => {
        const newText = event.target.value;

        marked.use({
            breaks: true
        });

        setText(newText);
        setMarkedText(marked.parse(newText));
    };


    return (
        <div className="markdown-previewer">
            <Editor onChange={handleChange} text={text} />
            <Previewer text={markedText} />
            <FooterBar />
        </div>
    )
}

export default MarkdownPreviewer;