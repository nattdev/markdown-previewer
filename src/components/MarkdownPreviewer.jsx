import { useState } from "react";
import Editor from "./Editor"
import Previewer from "./Previewer"
import FooterBar from "./FooterBar";
import { marked } from "marked";
import '../styles/markdownPreviewer.css';


function MarkdownPreviewer() {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        const newText = event.target.value;

        marked.use({
            breaks: true
        });

        setText(newText);
        setMarkedText(marked.parse(newText));
    };

    const [markedText, setMarkedText] = useState('');
    
    return (
        <div className="markdown-previewer">
            <Editor onChange={handleChange} />
            <Previewer text={markedText} />
            <FooterBar />
        </div>
    )
}

export default MarkdownPreviewer;