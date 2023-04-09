import { Component, ParentComponent, onCleanup, onMount } from 'solid-js';

import './List.css';
import { render } from 'solid-js/web';


// const element = document.getElementById('element')
// console.log('Before:', element.innerHTML)

// const last = element.childNodes[element.childNodes.length - 1]
// if (last.tagName === 'BR') last.remove()
// console.log('After:', element.innerHTML)

const ListItem: Component = () => {
    let liRef: HTMLLIElement;

    const handlerFocus = (e: MouseEvent) => {
        if (liRef.contains(e.target as Node) && liRef.textContent === '')
            window.getSelection()?.setPosition(liRef, 0);
    }

    const handlerBR = () => {
        let deleteBR = liRef!.childNodes[liRef!.childNodes.length - 1];
        if (deleteBR.nodeName === 'BR') deleteBR.remove();
        console.log('poop');
    }

    onMount(() =>{
        document.addEventListener('click', handlerFocus);
        document.addEventListener('keydown', handlerBR);
    })

    onCleanup(() => {
        document.removeEventListener('click', handlerFocus);
        document.removeEventListener('keydown', handlerBR);
    })

    return (
        <li ref={liRef!} contentEditable data-placeholder='List item'/>
    )
}

const List: ParentComponent = () => {
    let ulRef: HTMLUListElement;

    const addListItem = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && false)
            render(() =>
                <ListItem/>, ulRef as HTMLElement
            );
    }

    onMount(() =>{
        document.addEventListener('keyup', addListItem);
    })

    onCleanup(() => {
        document.removeEventListener('keyup', addListItem);
    })

    return (
        <ul ref={ulRef!}>
            <ListItem/>
        </ul>
    )
}

export default List;