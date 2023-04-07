import { ParentComponent } from 'solid-js';

import "./Editor.css";

const Editor: ParentComponent = (props) => {
    return (
        <div id='editor'>
            <article class='current-article'>
<<<<<<< HEAD
                    {props.children}
=======
                {props.children}
>>>>>>> 0c2a066 (0.0.1 - alpha)
            </article>
        </div>
    )
}

export default Editor;