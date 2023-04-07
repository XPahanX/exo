import { Component, onCleanup, onMount } from 'solid-js';

import "./Paragraph.css";

const Paragraph: Component = () => {
<<<<<<< HEAD
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
=======
    let prgfRef: HTMLParagraphElement;

    const handlerFocus = (e: MouseEvent) => {
        if(prgfRef.contains(e.target as Node) && prgfRef.textContent === '')
            window.getSelection()?.setPosition(prgfRef, 0);
    }

    onMount(() =>{
        document.addEventListener('click', handlerFocus);
    })

    onCleanup(() => {
        document.removeEventListener('click', handlerFocus);
    })

    return (
        <p ref={prgfRef!} contentEditable data-placeholder='Paragraph'/>
>>>>>>> 0c2a066 (0.0.1 - alpha)
    )
}

export default Paragraph;