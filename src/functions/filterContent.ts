export function filterContent(element: HTMLElement, allowedTags: Set<string>): void {
    let allElements = Array.from(element.querySelectorAll('*'));     
    // to start from the end, from deeper tags
    let allElementsReversed = allElements.reverse();
    for (let tag of allElementsReversed) {
        if (!allowedTags.has(tag.tagName))
            // replace bad tag with its children
            tag.replaceWith(...tag.childNodes);
        tag.removeAttribute('style');
    }
}

export function getTextWithLineBreaks(element: HTMLElement): string {
    let text = '';
    // Перебираем все дочерние элементы элемента
    for (let i = 0; i < element.childNodes.length; i++) {
        const child = element.childNodes[i];
        // Если дочерний элемент - элемент <br>, добавляем перенос строки
        if (child.nodeName === 'BR') {
            text += '\n';
        }
        // Если дочерний элемент - блочный элемент, добавляем перенос строки и рекурсивно обрабатываем его содержимое
        else if (child.nodeType === Node.ELEMENT_NODE 
                && getComputedStyle(child as Element).display === 'block'
        ) {
            text += getTextWithLineBreaks(child as HTMLElement) + '\n';
        }
        else {
            text += child.textContent;
        }
    }
    return text;
  }