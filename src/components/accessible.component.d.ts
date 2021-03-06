/**
 * Provides some useful methods to add accessibility features to subclasses.
 * In particular, it exposes a method to handle navigation event with both Keyboard and Mouse
 * and another with also the direction (right or left).
 */
export declare class AccessibleComponent {
    /**
     * Method to handle navigation events with both Keyboard and Mouse.
     * @param {string} direction of the navigation that can be either 'next' or 'prev'
     * @param {KeyboardEvent | MouseEvent} event payload
     * @returns {number} -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    handleNavigationEvent(direction: string, event: KeyboardEvent | MouseEvent): number;
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @param {KeyboardEvent | MouseEvent} event payload
     * @returns {number} 1 for NEXT and 0 for NOTHING
     */
    handleImageEvent(event: KeyboardEvent | MouseEvent): number;
    /**
     * Private method to handle keyboard events over an image.
     * @param {KeyboardEvent} event payload
     * @returns {number} 1 for NEXT and 0 for NOTHING
     */
    private handleImageKeyboardEvent(event);
    /**
     * Private method to handle mouse events over an image.
     * @param {MouseEvent} event payload
     * @returns {number} 1 for NEXT and 0 for NOTHING
     */
    private handleImageMouseEvent(event);
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @param {string} direction of the navigation that can be either 'next' or 'prev'
     * @param {KeyboardEvent} event payload
     * @returns {number} -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    private handleKeyboardNavigationEvent(direction, event);
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @param {string} direction of the navigation that can be either 'next' or 'prev'
     * @param {MouseEvent} event payload
     * @returns {number} -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    private handleMouseNavigationEvent(direction, event);
}
