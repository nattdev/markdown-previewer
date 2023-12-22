import { useState } from "react";
import Editor from "./Editor"
import Previewer from "./Previewer"
import { marked } from "marked";

function MarkdownPreviewer() {

const [text, setText] = useState('');

const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setMarkedText(marked.parse(newText));
};

const [markedText, setMarkedText] = useState('');

    return (
        <>
            <Editor onChange={handleChange}/>
            <Previewer text={markedText}/>
        </>
    )
}

export default MarkdownPreviewer;