export function filterContent(element: HTMLElement, allowedTags: Set<string>): void {
    let allElements = Array.from(element.querySelectorAll('*'));     
    // to start from the end, from deeper tags
    let allElementsReversed = allElements.reverse();
    for (let tag of allElementsReversed) {
        if (!allowedTags.has(tag.tagName)) {
            // replace bad tag with its children
            tag.replaceWith(...tag.childNodes);
        }
    }
}