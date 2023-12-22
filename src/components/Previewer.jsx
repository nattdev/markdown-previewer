function Previewer({text}) {
    return (
        <div className="window glass active">
        <div className="title-bar">
            <div className="title-bar-text">Previewer</div>
            <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
    )
}

export default Previewer;