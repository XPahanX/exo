<<<<<<< HEAD
import { Component, onCleanup, onError, onMount } from 'solid-js';
=======
import { Component, onCleanup, onMount, Show } from 'solid-js';
>>>>>>> 0c2a066 (0.0.1 - alpha)

import "./Heading.css";

const Heading: Component = () => {
<<<<<<< HEAD
    let headingRef: HTMLHeadingElement;

    const handlerMouse = (e: MouseEvent) => {
        if (headingRef.textContent == '')
            window.getSelection()?.setPosition(headingRef, 0);
    }

    const handlerKeyboard = (e: KeyboardEvent) => {
        // if(e.ctrlKey && e.key == 'B')

    }
    
    const formating = () => {
        // console.log(headingRef.innerHTML);
        formating2(headingRef, []);

        // while (delElem.length) {
        //     var parent = delElem[0].parentNode;
        //     if (parent) {
        //         while (delElem[0].firstChild) {
        //             parent.insertBefore(delElem[0].firstChild, delElem[0]);
        //         }
        //         parent.removeChild(delElem[0]);
        //     }
        // }
        // headingRef.innerHTML = headingRef.innerHTML.replace(/<(.|\n)*?>/g, '');          
    }

    const formating2 = (currElem: HTMLElement, whiteList: Array<string>) => {
        currElem.childNodes.forEach((child) => {
            console.log(child)
            if (child.hasChildNodes())
                formating2(child as HTMLElement, whiteList);
            if (!(child.nodeName in whiteList)) {              
                
            } 
        });
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
=======
    let hdrRef: HTMLHeadingElement;

    const handlerFocus = (e: MouseEvent) => {
        if (hdrRef.contains(e.target as Node) && hdrRef.textContent === '')
            window.getSelection()?.setPosition(hdrRef, 0);
    }

    onMount(() =>{
        document.addEventListener('click', handlerFocus);
    })

    onCleanup(() => {
        document.removeEventListener('click', handlerFocus);
    })

    return (
        <>
        <h1 ref={hdrRef!} contentEditable data-placeholder='Heading 1'/>
        </>
>>>>>>> 0c2a066 (0.0.1 - alpha)
    )
}

export default Heading;