import { Component, onCleanup, onError, onMount } from 'solid-js';
import { restoreCursorPosition, saveCursorPosition } from '../../functions/cursorPosition';
import { filterContent } from '../../functions/filterContent';

import "./Heading.css";

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: Component<HeadingProps> = (props) => {
    let headingRefs: HTMLHeadingElement[] = []
    const level = [
        <h1 ref={headingRefs![0]} contenteditable data-placeholder='Heading 1'/>,
        <h2 ref={headingRefs![1]} contenteditable data-placeholder='Heading 2'/>,
        <h3 ref={headingRefs![2]} contenteditable data-placeholder='Heading 3'/>,
        <h4 ref={headingRefs![3]} contenteditable data-placeholder='Heading 4'/>,
        <h5 ref={headingRefs![4]} contenteditable data-placeholder='Heading 5'/>,
        <h6 ref={headingRefs![5]} contenteditable data-placeholder='Heading 6'/>
    ]
    let headingRef: HTMLHeadingElement = headingRefs[props.level-1]
    const allowedTags = new Set(['']);

    const handlerMouse = (event: MouseEvent) => {
        if (headingRef.textContent == '' && headingRef.contains(event.target as Node)) 
            window.getSelection()?.setPosition(headingRef, 0);      
    }

    const handlerKeyboard = () => {}
    
    const filter = () => {
        const savedRange = saveCursorPosition(headingRef);
        filterContent(headingRef, allowedTags);
        restoreCursorPosition(headingRef, savedRange);
    }

    onMount(() =>{
        document.addEventListener('click', handlerMouse);
        document.addEventListener('keydown', handlerKeyboard);
        document.addEventListener('input', filter);
    })

    onCleanup(() => {
        document.removeEventListener('click', handlerMouse);
        document.removeEventListener('keydown', handlerKeyboard);
        document.removeEventListener('input', filter);
    })

    onError(() => {})

    return (
        level[props.level-1]
    )
}

export default Heading;