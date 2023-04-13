export function saveCursorPosition(element: HTMLElement): Range | null {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        if (element.contains(range.startContainer)) {
            return range;
        }
    }
    return null;
}

export function restoreCursorPosition(element: HTMLElement, range: Range | null): void {
    if (range) {
        const selection = window.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
}