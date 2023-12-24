import '../styles/editor.css'

function Editor({ onChange, text}) {
    return (
        <div className="window glass active editor">
            <div className="title-bar">
                <div className="title-bar-text">Editor</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body has-space">
                <textarea id="editor" onChange={onChange} value={text}></textarea>
            </div>
        </div>
    )
}

export default Editor;