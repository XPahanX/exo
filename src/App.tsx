import Editor from "./components/Editor/Editor";
import Heading from "./components/Heading/Heading";
import Paragraph from "./components/Paragraph/Paragraph";
import Code from "./components/Code/Code";
import List from "./components/List/List";

import "./App.css";
<<<<<<< HEAD
import { onCleanup, onError, onMount } from "solid-js";
import { render } from "solid-js/web";

// https://stephenhaney.com/2020/get-contenteditable-plaintext-with-correct-linebreaks/
=======
import { onCleanup, onMount } from "solid-js";
import { render } from "solid-js/web";
>>>>>>> 0c2a066 (0.0.1 - alpha)

function App() {

  function addElement(e: KeyboardEvent) {
<<<<<<< HEAD
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
=======
    if (e.altKey && e.key === 'h')
      render(() =>
        <Heading/>, document.getElementsByClassName('current-article')[0] as HTMLElement
      );
    if (e.altKey && e.key === 'p')
      render(() =>
        <Paragraph/>, document.getElementsByClassName('current-article')[0] as HTMLElement
      );
    if (e.altKey && e.key === 'c')
      render(() =>
        <Code/>, document.getElementsByClassName('current-article')[0] as HTMLElement
      );
    if (e.altKey && e.key === 'l')
>>>>>>> 0c2a066 (0.0.1 - alpha)
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

<<<<<<< HEAD
  onError(() => {})

  return (
    <Editor>
      <Heading/>
      <Paragraph/>
      <Code/>
=======
  return (
    <Editor>
      <Heading/>
>>>>>>> 0c2a066 (0.0.1 - alpha)
    </Editor>
  )
}

export default App;
