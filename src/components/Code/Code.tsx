import { Component, onCleanup, onMount } from 'solid-js';

import "./Code.css";

const Code: Component = () => {
    let codeRef: HTMLPreElement;

    const handlerFocus = (e: MouseEvent) => {
        if(codeRef.children[0].contains(e.target as Node) && codeRef.children[0].textContent === '')
            window.getSelection()?.setPosition(codeRef.children[0], 0);
    }

    const parser = () => {
        let code = codeRef.firstChild as HTMLElement;
        if(code != null)
            code.innerText = code.innerText; 
    }

    onMount(() =>{
        document.addEventListener('click', handlerFocus);
        document.addEventListener('input', parser);
    })

    onCleanup(() => {
        document.removeEventListener('click', handlerFocus);
    })

    return (
        <pre ref={codeRef!}>
            <code contenteditable data-placeholder='code block'></code>
        </pre>
    )
}

export default Code;