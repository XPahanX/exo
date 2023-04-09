import { Component, onCleanup, onMount } from 'solid-js';

import "./Paragraph.css";

const Paragraph: Component = () => {
    let paragraphRef: HTMLParagraphElement;

    const handlerFocus = (e: MouseEvent) => {
        if(paragraphRef.contains(e.target as Node) && paragraphRef.textContent === '')
            window.getSelection()?.setPosition(paragraphRef, 0);
    }

    const handlerKeyboard = (e: KeyboardEvent) => {
        if (e.key == 'Enter')
            e.preventDefault();
    }
    
    const Parser = () => {

    }

    onMount(() =>{
        paragraphRef.addEventListener('click', handlerFocus);
    })

    onCleanup(() => {
        paragraphRef.removeEventListener('click', handlerFocus);
    })

    return (
        <p ref={paragraphRef!} contenteditable data-placeholder='Paragraph'/>
    )
}

export default Paragraph;