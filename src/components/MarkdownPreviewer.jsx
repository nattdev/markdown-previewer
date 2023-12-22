import { useState } from "react";
import Editor from "./Editor"
import Previewer from "./Previewer"

function MarkdownPreviewer() {

const [text, setText] = useState('');

const handleChange = (event) => {
    setText(event.target.value);
};

    return (
        <>
            <Editor onChange={handleChange}/>
            <Previewer text={text}/>
        </>
    )
}

export default MarkdownPreviewer;