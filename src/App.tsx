import { JSXElement, createSignal, onCleanup, onError, onMount } from "solid-js";

import Editor from "./components/Editor/Editor";
import Article from "./components/Article/Article";

import "./App.css";


function App() {

    onMount (() =>{})

    onCleanup (() => {})

    onError(() => {})

    return (
        <Editor>
            <Article>
            </Article>
        </Editor>
    )
}

export default App;