import { JSXElement, ParentComponent, createSignal, onCleanup, onError, onMount } from 'solid-js';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

import "./Article.css"
import Modal from '../Modal/Modal';
import Code from '../Code/Code';

const Article: ParentComponent = (props) => {
    const [components, setComponents] = createSignal<JSXElement[]>([]);
    const [active, setActive] = createSignal(true)

    function addComponent(newComponent: JSXElement) {
        setComponents([...components(), newComponent]);
    }

    const handlerMouse = (event: MouseEvent) => {}

    function handlerKeyboard(event: KeyboardEvent) {
        if (event.ctrlKey && event.altKey && event.key === 'h')
            addComponent(<Heading level={2}/>);
        if (event.ctrlKey && event.altKey && event.key === 'p')
            addComponent(<Paragraph />)
        if (event.ctrlKey && event.altKey && event.key === 'c')
            addComponent(<Code />)
    }

    onMount (() =>{
        document.addEventListener('keydown', handlerKeyboard);
    })

    onCleanup (() => {
        document.removeEventListener('keydown', handlerKeyboard);
    })

    onError(() => {})

    return (
        <article class='current-article'>
            <Heading level={1}/>
            {components()}
        </article>
    )
}

export default Article;