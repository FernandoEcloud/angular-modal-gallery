import { Action } from './action.enum';
import { InternalLibImage } from './image-internal.class';
import { Size } from './size.interface';
/**
 * Interface `ButtonsConfig` to add buttons, show/hide their, and to add the strategy.
 */
export interface ButtonsConfig {
    visible: boolean;
    strategy: ButtonsStrategy;
    buttons?: ButtonConfig[];
}
/**
 * Interface `ButtonConfig` to configure a single button.
 */
export interface ButtonConfig {
    className?: string;
    size?: Size;
    fontSize?: string;
    type: ButtonType;
    title?: string;
    ariaLabel?: string;
    extUrlInNewTab?: boolean;
}
/**
 * Interface `ButtonEvent` to represent the event payload when a button is clicked.
 */
export interface ButtonEvent {
    button: ButtonConfig;
    image: InternalLibImage | null;
    action: Action;
}
/**
 * Enum `ButtonsStrategy` to configure the logic of a button.
 */
export declare enum ButtonsStrategy {
    DEFAULT = 1,
    SIMPLE = 2,
    ADVANCED = 3,
    FULL = 4,
    CUSTOM = 5,
}
/**
 * Enum `ButtonType` is the type of a button.
 */
export declare enum ButtonType {
    DELETE = 1,
    EXTURL = 2,
    DOWNLOAD = 3,
    CLOSE = 4,
    CUSTOM = 5,
}
/**
 * Array of admitted types of buttons.
 */
export declare const WHITELIST_BUTTON_TYPES: ButtonType[];
