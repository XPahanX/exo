import { Component, onCleanup, onError, onMount } from 'solid-js';
import { restoreCursorPosition, saveCursorPosition } from '../../functions/cursorPosition';
import { filterContent } from '../../functions/filterContent';

import "./Heading.css";


const Heading: Component = () => {
    let headingRef: HTMLHeadingElement;
    const allowedTags = new Set(['']);

    const handlerMouse = (e: MouseEvent) => {
        if (headingRef.textContent == '')
            window.getSelection()?.setPosition(headingRef, 0);
    }

    const handlerKeyboard = (e: KeyboardEvent) => {
        // if(e.ctrlKey && e.key == 'B')
    }
    
    const filter = () => {
        const savedRange = saveCursorPosition(headingRef);
        filterContent(headingRef, allowedTags);
        restoreCursorPosition(headingRef, savedRange);
    }

    onMount(() =>{
        headingRef.addEventListener('click', handlerMouse);
        headingRef.addEventListener('keydown', handlerKeyboard);
        headingRef.addEventListener('input', filter);
    })

    onCleanup(() => {
        headingRef.removeEventListener('click', handlerMouse);
        headingRef.removeEventListener('keydown', handlerKeyboard);
        headingRef.removeEventListener('input', filter);
    })

    onError(() => {})

    return (
        <h1 ref={headingRef!} contenteditable data-placeholder='Heading 1'/>
    )
}

export default Heading;