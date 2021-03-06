/// <reference types="mousetrap" />
import { InjectionToken } from '@angular/core';
import { KeyboardServiceConfig } from '../model/keyboard-service-config.interface';
export declare const KEYBOARD_CONFIGURATION: InjectionToken<KeyboardServiceConfig>;
/**
 * Service to intercept ctrl+s (or cmd+s on macOS) using a third-party library, called Mousetrap.
 */
export declare class KeyboardService {
    private config;
    /**
     * Private Mousetrap variable to store the instance.
     */
    private mousetrap;
    /**
     * Private variable to store shortcuts as either Array or string.
     */
    private shortcuts;
    /**
     * Constructor of `KeyboardService` to init `mousetrap` and `shortcuts` private variables.
     * @param {KeyboardServiceConfig} config object received by the `forRoot()` function to init custom shortcuts
     */
    constructor(config: KeyboardServiceConfig);
    /**
     * Method to add a lister for ctrl+s/cmd+s keyboard events.
     * @param {(e: ExtendedKeyboardEvent, combo: string) => any} onBind callback function to add shortcuts
     */
    add(onBind: (e: ExtendedKeyboardEvent, combo: string) => any): void;
    /**
     * Method to reset all listeners. Please, call this function when needed
     * to free resources ad prevent leaks.
     */
    reset(): void;
}
