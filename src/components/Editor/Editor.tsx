import { ParentComponent } from 'solid-js';

import "./Editor.css";

const Editor: ParentComponent = (props) => {
    return (
        <div id='editor'>
            <article class='current-article'>
                    {props.children}
            </article>
        </div>
    )
}

export default Editor;