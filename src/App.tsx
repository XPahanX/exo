import { Component, JSXElement, createSignal, onCleanup, onError, onMount } from "solid-js";
import { render } from "solid-js/web";

import Editor from "./components/Editor/Editor";
import Heading from "./components/Heading/Heading";
import Paragraph from "./components/Paragraph/Paragraph";
import Code from "./components/Code/Code";
import List from "./components/List/List";

import "./App.css";

function App() {

    const [components, setComponents] = createSignal<Component[]>([]);
    const comp = <Heading />;

    function addComponent(newComponent: Component) {
        setComponents([...components(), newComponent]);
    }

    function handlerKeyboard(event: KeyboardEvent) {
        if (event.ctrlKey && event.altKey && event.key === 'h') {
            // render(() => 
            //     <Heading />, document.getElementsByClassName('current-article')[0]
            // )
            addComponent(Heading)
        }
    }

    onMount (() =>{
        document.addEventListener('keydown', handlerKeyboard);
    })

    onCleanup (() => {})

    onError(() => {})

    return (
        <Editor>
            <Heading/>
            <Paragraph/>
            {components() as JSXElement}
        </Editor>
    )
}

export default App;