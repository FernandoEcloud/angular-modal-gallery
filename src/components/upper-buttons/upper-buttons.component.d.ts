import { EventEmitter, OnInit } from '@angular/core';
import { AccessibleComponent } from '../accessible.component';
import { Action } from '../../model/action.enum';
import { Image } from '../../model/image.class';
import { ButtonConfig, ButtonEvent, ButtonsConfig } from '../../model/buttons-config.interface';
/**
 * Internal representation of `ButtonConfig` with an optional `id` field, used by trackId to improve performances.
 */
export interface InternalButtonConfig extends ButtonConfig {
    id?: number;
}
/**
 * Component with all upper buttons.
 * Also it emits click events as outputs.
 */
export declare class UpperButtonsComponent extends AccessibleComponent implements OnInit {
    /**
     * Object of type `Image` that represent the visible image.
     */
    currentImage: Image;
    /**
     * Object of type `ButtonsConfig` to init UpperButtonsComponent's features.
     * For instance, it contains an array of buttons.
     */
    buttonsConfig: ButtonsConfig;
    /**
     * Output to emit clicks on refresh button. The payload contains a `ButtonEvent`.
     */
    refresh: EventEmitter<ButtonEvent>;
    /**
     * Output to emit clicks on delete button. The payload contains a `ButtonEvent`.
     */
    delete: EventEmitter<ButtonEvent>;
    /**
     * Output to emit clicks on navigate button. The payload contains a `ButtonEvent`.
     */
    navigate: EventEmitter<ButtonEvent>;
    /**
     * Output to emit clicks on download button. The payload contains a `ButtonEvent`.
     */
    download: EventEmitter<ButtonEvent>;
    /**
     * Output to emit clicks on close button. The payload contains a `ButtonEvent`.
     */
    close: EventEmitter<ButtonEvent>;
    /**
     * Output to emit clicks on all custom buttons. The payload contains a `ButtonEvent`.
     */
    customEmit: EventEmitter<ButtonEvent>;
    /**
     * Array of `InternalButtonConfig` exposed to the template. This field is initialized
     * applying transformations, default values and so on to the input of the same type.
     */
    buttons: InternalButtonConfig[];
    /**
     * Object of type `ButtonsConfig` exposed to the template. This field is initialized
     * applying transformations, default values and so on to the input of the same type.
     */
    configButtons: ButtonsConfig;
    /**
     * Default buttons array for standard configuration
     */
    private defaultButtonsDefault;
    /**
     * Default buttons array for simple configuration
     */
    private simpleButtonsDefault;
    /**
     * Default buttons array for advanced configuration
     */
    private advancedButtonsDefault;
    /**
     * Default buttons array for full configuration
     */
    private fullButtonsDefault;
    /**
     * Method ´ngOnInit´ to build `configButtons` applying a default value and also to
     * init the `buttons` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    ngOnInit(): void;
    /**
     * Method called by events from both keyboard and mouse on a button.
     * This will call a private method to trigger an output with the right payload.
     * @param {InternalButtonConfig} button that called this method
     * @param {KeyboardEvent | MouseEvent} event payload
     * @param {Action} action that triggered the source event or `Action.CLICK` if not specified
     * @throws an error if the button type is unknown
     */
    onEvent(button: InternalButtonConfig, event: KeyboardEvent | MouseEvent, action?: Action): void;
    /**
     * Method used in the template to track ids in ngFor.
     * @param {number} index of the array
     * @param {Image} item of the array
     * @returns {number} the id of the item or undefined if the item is not valid
     */
    trackById(index: number, item: InternalButtonConfig): number | undefined;
    /**
     * Private method to emit an event using the specified output as an `EventEmitter`.
     * @param {EventEmitter<ButtonEvent>} emitter is the output to emit the `ButtonEvent`
     * @param {KeyboardEvent | MouseEvent} event is the source that triggered this method
     * @param {ButtonEvent} dataToEmit payload to emit
     */
    private triggerOnMouseAndKeyboard(emitter, event, dataToEmit);
    /**
     * Private method to add ids to the array of buttons.
     * It adds ids in a reverse way, to be sure that the last button will always have id = 0.
     * This is really useful in unit testing to be sure that close button always have id = 0, download 1 and so on...
     * It's totally transparent to the user.
     * @param {ButtonConfig[]} buttons config array
     * @returns {ButtonConfig[]} the input array with incremental numeric ids
     */
    private addButtonIds(buttons);
    /**
     * Private method to validate custom buttons received as input.
     * @param {ButtonConfig[]} buttons config array
     * @returns {ButtonConfig[]} the same input buttons config array
     * @throws an error is exists a button with an unknown type
     */
    private validateCustomButtons(buttons?);
}
