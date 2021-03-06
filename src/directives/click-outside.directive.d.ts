import { EventEmitter } from '@angular/core';
/**
 * Directive to close the modal gallery clicking on the semi-transparent background.
 * In fact, it listens for a click on all elements that aren't 'inside' and it emits
 * an event using `@Output clickOutside`.
 */
export declare class ClickOutsideDirective {
    /**
     * Boolean to enable this directive.
     */
    clickOutsideEnable: boolean;
    /**
     * Output to emit an event if the clicked element class doesn't contain 'inside' or it is 'hidden'. The payload is a boolean.
     */
    clickOutside: EventEmitter<boolean>;
    /**
     * Method called by Angular itself every click thanks to `@HostListener`.
     * @param {MouseEvent} event payload received evey click
     */
    onClick(event: MouseEvent): void;
}
