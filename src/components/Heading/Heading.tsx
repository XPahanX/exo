import { Component, onCleanup, onError, onMount } from 'solid-js';

import "./Heading.css";

const Heading: Component = () => {
    let headingRef: HTMLHeadingElement;

    const handlerMouse = (e: MouseEvent) => {
        if (headingRef.textContent == '')
            window.getSelection()?.setPosition(headingRef, 0);
    }

    const handlerKeyboard = (e: KeyboardEvent) => {
        // if(e.ctrlKey && e.key == 'B')

    }
    
    const formating = () => {
        // select every tag
        let allElements = Array.from(headingRef.querySelectorAll('*'));
        console.log(headingRef);
        
        // allowed list of tags as a set for perf. UPPERCASE as in tagName
        const allowedTags = new Set(['A', 'B']);

        // to start from the end, from deeper tags
        let allElementsReversed = allElements.reverse();

        for (let tag of allElementsReversed) {
            if (!allowedTags.has(tag.tagName)) {
                // replace bad tag with its children
                tag.replaceWith(...tag.childNodes);
            }
        }
        console.log(headingRef);
    }



    onMount(() =>{
        headingRef.addEventListener('click', handlerMouse);
        headingRef.addEventListener('keydown', handlerKeyboard);
        headingRef.addEventListener('input', formating);
    })

    onCleanup(() => {
        headingRef.removeEventListener('click', handlerMouse);
        headingRef.removeEventListener('keydown', handlerKeyboard);
        headingRef.removeEventListener('input', formating);
    })

    onError(() => {})

    return (
        <h1 ref={headingRef!} contenteditable data-placeholder='Heading 1'>
            fds<div>fghd<div>ghfd<b>fds</b>hgfhs</div>g<i>hj</i></div>
            {/* A nice <b>fsdfs</b>house was found in <b>Toro<i>ff</i>nto</b>. */}
        </h1>
    )
}

export default Heading;