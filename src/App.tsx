import Editor from "./components/Editor/Editor";
import Heading from "./components/Heading/Heading";
import Paragraph from "./components/Paragraph/Paragraph";
import Code from "./components/Code/Code";
import List from "./components/List/List";

import "./App.css";
import { onCleanup, onError, onMount } from "solid-js";
import { render } from "solid-js/web";

// https://stephenhaney.com/2020/get-contenteditable-plaintext-with-correct-linebreaks/

function App() {

  function addElement(e: KeyboardEvent) {
    if (e.altKey && e.key == 'h')
      render(() =>
        <Heading/>, document.getElementsByClassName('current-article')[0] as HTMLElement
      );
    // console.log('poop');
    if (e.altKey && e.key == 'p')
      render(() =>
        <Paragraph/>, document.getElementsByClassName('current-article')[0] as HTMLElement
      );
    if (e.altKey && e.key == 'c')
      render(() =>
        <Code/>, document.getElementsByClassName('current-article')[0] as HTMLElement
      );
    if (e.altKey && e.key == 'l')
      render(() =>
        <List/>, document.getElementsByClassName('current-article')[0] as HTMLElement
      );
  }

  onMount (() =>{
    document.addEventListener('keydown', addElement);
  })

  onCleanup (() => {
    document.removeEventListener('keydown', addElement);
  })

  onError(() => {})

  return (
    <Editor>
      <Heading/>
      <Paragraph/>
      <Code/>
    </Editor>
  )
}

export default App;
