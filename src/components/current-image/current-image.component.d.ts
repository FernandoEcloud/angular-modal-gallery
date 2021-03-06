import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccessibleComponent } from '../accessible.component';
import { AccessibilityConfig } from '../../model/accessibility.interface';
import { Action } from '../../model/action.enum';
import { Description } from '../../model/description.interface';
import { Image, ImageModalEvent } from '../../model/image.class';
import { InternalLibImage } from '../../model/image-internal.class';
import { KeyboardConfig } from '../../model/keyboard-config.interface';
import { LoadingConfig } from '../../model/loading-config.interface';
import { SlideConfig } from '../../model/slide-config.interface';
import { CurrentImageConfig } from '../../model/current-image-config.interface';
/**
 * Interface to describe the Load Event, used to
 * emit an event when the image is finally loaded and the spinner has gone.
 */
export interface ImageLoadEvent {
    status: boolean;
    index: number;
    id: number;
}
/**
 * Component with the current image with some additional elements like arrows and side previews.
 */
export declare class CurrentImageComponent extends AccessibleComponent implements OnInit, OnChanges {
    /**
     * Object of type `InternalLibImage` that represent the visible image.
     */
    currentImage: InternalLibImage;
    /**
     * Array of `InternalLibImage` that represent the model of this library with all images,
     * thumbs and so on.
     */
    images: InternalLibImage[];
    /**
     * Boolean that it is true if the modal gallery is visible.
     * If yes, also this component should be visible.
     */
    isOpen: boolean;
    /**
     * Interface to configure current image in modal-gallery.
     * For instance you can disable navigation on click on current image (enabled by default).
     */
    currentImageConfig: CurrentImageConfig;
    /**
     * Object of type `LoadingConfig` that contains fields like enable/disable
     * and a way to choose a loading spinner.
     * TODO: this will be removed in version 6.0.0 because it will be into currentImageConfig
     */
    loadingConfig: LoadingConfig;
    /**
     * Object of type `Description` to configure and show image descriptions.
     * TODO: this will be removed in version 6.0.0 because it will be into currentImageConfig
     */
    descriptionConfig: Description;
    /**
     * Object of type `SlideConfig` to get `infinite sliding`.
     */
    slideConfig: SlideConfig;
    /**
     * Object of type `AccessibilityConfig` to init custom accessibility features.
     * For instance, it contains titles, alt texts, aria-labels and so on.
     */
    accessibilityConfig: AccessibilityConfig;
    /**
     * Object of type `KeyboardConfig` to assign custom keys to both ESC, RIGHT and LEFT keyboard's actions.
     */
    keyboardConfig: KeyboardConfig;
    /**
     * Output to emit an event when images are loaded. The payload contains an `ImageLoadEvent`.
     */
    loadImage: EventEmitter<ImageLoadEvent>;
    /**
     * Output to emit any changes of the current image. The payload contains an `ImageModalEvent`.
     */
    changeImage: EventEmitter<ImageModalEvent>;
    /**
     * Output to emit an event when the modal gallery is closed. The payload contains an `ImageModalEvent`.
     */
    close: EventEmitter<ImageModalEvent>;
    /**
     * Enum of type `Action` that represents a mouse click on a button.
     * Declared here to be used inside the template.
     */
    clickAction: Action;
    /**
     * Enum of type `Action` that represents a keyboard action.
     * Declared here to be used inside the template.
     */
    keyboardAction: Action;
    /**
     * Boolean that it's true when you are watching the first image (currently visible).
     * False by default
     */
    isFirstImage: boolean;
    /**
     * Boolean that it's true when you are watching the last image (currently visible).
     * False by default
     */
    isLastImage: boolean;
    /**
     * Boolean that it's true if an image of the modal gallery is still loading.
     * True by default
     */
    loading: boolean;
    /**
     * Object of type `CurrentImageConfig` exposed to the template. This field is initialized
     * applying transformations, default values and so on to the input of the same type.
     */
    configCurrentImage: CurrentImageConfig;
    /**
     * Object of type `LoadingConfig` exposed to the template. This field is initialized
     * applying transformations, default values and so on to the input of the same type.
     * TODO: this will be removed in version 6.0.0 because it will be into configCurrentImage
     */
    configLoading: LoadingConfig;
    /**
     * `Description` object initialized applying transformations, default values
     * and so on to the input of the same type.
     * TODO: this will be removed in version 6.0.0 because it will be into configCurrentImage
     */
    description: Description;
    /**
     * Private object without type to define all swipe actions used by hammerjs.
     */
    private SWIPE_ACTION;
    /**
     * Method ´ngOnInit´ to build both `defaultLoading` and `defaultDescription` applying default values.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    ngOnInit(): void;
    /**
     * Method ´ngOnChanges´ to update `loading` status and emit events.
     * If the gallery is open, then it will also manage boundary arrows and sliding.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Method to handle keypress based on the `keyboardConfig` input. It gets the keyCode of
     * the key that triggered the keypress event to navigate between images or to close the modal gallery.
     * @param {number} keyCode of the key that triggered the keypress event
     */
    onKeyPress(keyCode: number): void;
    /**
     * Method to get the image description based on the image object itself.
     * If you provide a full description this will be the visible description, otherwise,
     * it will be built using the `Description` object, concatenating its fields with a specific logic.
     * @param {Image} image to get its description. If not provided it will be the current image
     * @returns String description of the image (or the current image if not provided)
     * @throws an Error if description isn't available
     */
    getDescriptionToDisplay(image?: Image): string;
    /**
     * Method to get the title attributes based on descriptions.
     * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
     * it prevents an empty string as title.
     * @param {Image} image to get its description. If not provided it will be the current image
     * @returns String title of the image based on descriptions
     * @throws an Error if description isn't available
     */
    getTitleToDisplay(image?: Image): string;
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param {Image} image to get its alt description. If not provided it will be the current image
     * @returns String alt description of the image (or the current image if not provided)
     */
    getAltDescriptionByImage(image?: Image): string;
    /**
     * Method to get the left side preview image.
     * @returns {Image} the image to show as size preview on the left
     */
    getLeftPreviewImage(): Image;
    /**
     * Method to get the right side preview image.
     * @returns {Image} the image to show as size preview on the right
     */
    getRightPreviewImage(): Image;
    /**
     * Method called by events from both keyboard and mouse on an image.
     * This will invoke the nextImage method (except for click events, because It checks also if navigateOnClick === true).
     * @param {KeyboardEvent | MouseEvent} event payload
     * @param {Action} action that triggered the event or `Action.NORMAL` if not provided
     */
    onImageEvent(event: KeyboardEvent | MouseEvent, action?: Action): void;
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {string} direction of the navigation that can be either 'next' or 'prev'
     * @param {KeyboardEvent | MouseEvent} event payload
     * @param {Action} action that triggered the event or `Action.NORMAL` if not provided
     */
    onNavigationEvent(direction: string, event: KeyboardEvent, action?: Action): void;
    /**
     * Method to go back to the previous image.
     * @param action Enum of type `Action` that represents the source
     *  action that moved back to the previous image. `Action.NORMAL` by default.
     */
    prevImage(action?: Action): void;
    /**
     * Method to go back to the previous image.
     * @param action Enum of type `Action` that represents the source
     *  action that moved to the next image. `Action.NORMAL` by default.
     */
    nextImage(action?: Action): void;
    /**
     * Method to emit an event as loadImage output to say that the requested image if loaded.
     * This method is invoked by the javascript's 'load' event on an img tag.
     * @param {Event} event that triggered the load
     */
    onImageLoad(event: Event): void;
    /**
     * Method used by Hammerjs to support touch gestures.
     * @param action String that represent the direction of the swipe action. 'swiperight' by default.
     */
    swipe(action?: string): void;
    /**
     * Method used in `modal-gallery.component` to get the index of an image to delete.
     * @param {Image} image to get the index, or the visible image, if not passed
     * @returns {number} the index of the image
     */
    getIndexToDelete(image?: Image): number;
    /**
     * Private method to update both `isFirstImage` and `isLastImage` based on
     * the index of the current image.
     * @param {number} currentIndex is the index of the current image
     */
    private handleBoundaries(currentIndex);
    /**
     * Private method to manage boundary arrows and sliding.
     * This is based on the slideConfig input to enable/disable 'infinite sliding'.
     * @param {number} index of the visible image
     */
    private manageSlideConfig(index);
    /**
     * Private method to check if next/prev actions should be blocked.
     * It checks if slideConfig.infinite === false and if the image index is equals to the input parameter.
     * If yes, it returns true to say that sliding should be blocked, otherwise not.
     * @param {number} boundaryIndex that could be either the beginning index (0) or the last index
     *  of images (this.images.length - 1).
     * @returns {boolean} true if slideConfig.infinite === false and the current index is
     *  either the first or the last one.
     */
    private isPreventSliding(boundaryIndex);
    /**
     * Private method to get the next index.
     * This is necessary because at the end, when you call next again, you'll go to the first image.
     * That happens because all modal images are shown like in a circle.
     */
    private getNextImage();
    /**
     * Private method to get the previous index.
     * This is necessary because at index 0, when you call prev again, you'll go to the last image.
     * That happens because all modal images are shown like in a circle.
     */
    private getPrevImage();
    /**
     * Private method to build a text description.
     * This is used also to create titles.
     * @param {Image} image to get its description. If not provided it will be the current image.
     * @param {boolean} imageWithoutDescription is a boolean that it's true if the image hasn't a 'modal' description.
     * @returns String description built concatenating image fields with a specific logic.
     */
    private buildTextDescription(image, imageWithoutDescription);
}
