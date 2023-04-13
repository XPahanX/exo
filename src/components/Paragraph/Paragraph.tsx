import { Component, onCleanup, onError, onMount } from 'solid-js';
import { restoreCursorPosition, saveCursorPosition } from '../../functions/cursorPosition';
import { filterContent } from '../../functions/filterContent';

import "./Paragraph.css";

const Paragraph: Component = () => {
    let paragraphRef: HTMLParagraphElement;
    const allowedTags = new Set([
        'A',
        'B',
        'I',
        'U',
        'CODE'
    ]);

    const handlerMouse = (event: MouseEvent) => {
        if (paragraphRef.textContent == '')
            window.getSelection()?.setPosition(paragraphRef, 0);
    }

    const handlerKeyboard = (event: KeyboardEvent) => {

    }
    
    const filter = () => {
        const savedRange = saveCursorPosition(paragraphRef);
        filterContent(paragraphRef, allowedTags);
        restoreCursorPosition(paragraphRef, savedRange);
    }

    onMount(() =>{
        paragraphRef.addEventListener('click', handlerMouse);
        paragraphRef.addEventListener('keydown', handlerKeyboard);
        paragraphRef.addEventListener('input', filter);
    })

    onCleanup(() => {
        paragraphRef.removeEventListener('click', handlerMouse);
        paragraphRef.removeEventListener('keydown', handlerKeyboard);
        paragraphRef.removeEventListener('input', filter);
    })

    onError(() => {})

    return (
        <p ref={paragraphRef!} contenteditable data-placeholder='Paragraph'/>
    )
}

export default Paragraph;