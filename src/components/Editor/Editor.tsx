import { ParentComponent, onCleanup, onError, onMount } from "solid-js";

import "./Editor.css";

const Editor: ParentComponent = (props) => {

    onMount (() =>{})

    onCleanup (() => {})

    onError(() => {})

    return (
        <div id='editor'>
            {props.children}
        </div>
    )
}

export default Editor;