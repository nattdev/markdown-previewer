function Editor({onChange}) {

    return (
        <div className="window glass active">
            <div className="title-bar">
                <div className="title-bar-text">Editor</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <textarea onChange={onChange} id="editor"></textarea>
        </div>
    )
}

export default Editor;