import { Component, onCleanup, onMount } from 'solid-js';

import "./Code.css";
import { filterContent, getTextWithLineBreaks } from '../../functions/filterContent';
import { restoreCursorPosition, saveCursorPosition } from '../../functions/cursorPosition';

const Code: Component = () => {
    let codeRef: HTMLPreElement;
    const allowedTags = new Set([])

    const handlerFocus = (e: MouseEvent) => {
        if (codeRef.children[0].contains(e.target as Node) 
            && codeRef.children[0].textContent === ''
        )
            window.getSelection()?.setPosition(codeRef.children[0], 0);
    }

    const parser = () => {
        let code = codeRef.firstChild as HTMLElement;
        console.log(code);
        const savedRange = saveCursorPosition(code);
        code.innerText = getTextWithLineBreaks(code);
        restoreCursorPosition(code, savedRange);
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