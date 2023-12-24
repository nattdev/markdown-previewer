import '../styles/previewer.css'

function Previewer({ text }) {
    return (
        <div className="window glass active previewer">
            <div className="title-bar">
                <div className="title-bar-text">Previewer</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div id="preview" className="window-body has-space" dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
    )
}

export default Previewer;