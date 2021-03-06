import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccessibleComponent } from '../accessible.component';
import { AccessibilityConfig } from '../../model/accessibility.interface';
import { Image } from '../../model/image.class';
import { InternalLibImage } from '../../model/image-internal.class';
import { Size } from '../../model/size.interface';
import { PreviewConfig } from '../../model/preview-config.interface';
import { SlideConfig } from '../../model/slide-config.interface';
/**
 * Component with image previews
 */
export declare class PreviewsComponent extends AccessibleComponent implements OnInit, OnChanges {
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
     * Object of type `SlideConfig` to get `infinite sliding`.
     */
    slideConfig: SlideConfig;
    /**
     * Object of type `PreviewConfig` to init PreviewsComponent's features.
     * For instance, it contains a param to show/hide this component, sizes.
     */
    previewConfig: PreviewConfig;
    /**
     * Object of type `AccessibilityConfig` to init custom accessibility features.
     * For instance, it contains titles, alt texts, aria-labels and so on.
     */
    accessibilityConfig: AccessibilityConfig;
    /**
     * Output to emit the clicked preview. The payload contains the `InternalLibImage` associated to the clicked preview.
     */
    clickPreview: EventEmitter<InternalLibImage>;
    /**
     * Array of `InternalLibImage` exposed to the template. This field is initialized
     * applying transformations, default values and so on to the input of the same type.
     */
    previews: InternalLibImage[];
    /**
     * Object of type `PreviewConfig` exposed to the template. This field is initialized
     * applying transformations, default values and so on to the input of the same type.
     */
    configPreview: PreviewConfig;
    /**
     * Start index of the input images used to display previews.
     */
    start: number;
    /**
     * End index of the input images used to display previews.
     */
    end: number;
    /**
     * Default preview's size object, also used in the template to apply default sizes to ksSize's directive.
     */
    defaultPreviewSize: Size;
    /**
     * Default preview's config object
     */
    private defaultPreviewConfig;
    /**
     * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
     * init the `previews` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    ngOnInit(): void;
    /**
     * Method to check if an image is active (i.e. a preview image).
     * @param {InternalLibImage} preview is an image to check if it's active or not
     * @returns {boolean} true if is active, false otherwise
     */
    isActive(preview: InternalLibImage): boolean;
    /**
     * Method ´ngOnChanges´ to update `previews` array.
     * Also, both `start` and `end` local variables will be updated accordingly.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Method called by events from both keyboard and mouse on a preview.
     * This will trigger the `clickpreview` output with the input preview as its payload.
     * @param {InternalLibImage} preview that triggered this method
     * @param {KeyboardEvent | MouseEvent} event payload
     */
    onImageEvent(preview: InternalLibImage, event: KeyboardEvent | MouseEvent): void;
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {string} direction of the navigation that can be either 'next' or 'prev'
     * @param {KeyboardEvent | MouseEvent} event payload
     */
    onNavigationEvent(direction: string, event: KeyboardEvent | MouseEvent): void;
    /**
     * Method used in the template to track ids in ngFor.
     * @param {number} index of the array
     * @param {Image} item of the array
     * @returns {number} the id of the item
     */
    trackById(index: number, item: Image): number;
    /**
     * Private method to init previews based on the currentImage and the full array of images.
     * The current image in mandatory to show always the current preview (as highlighted).
     * @param {InternalLibImage} currentImage to decide how to show previews, because I always want to see the current image as highlighted
     * @param {InternalLibImage[]} images is the array of all images.
     */
    private initPreviews(currentImage, images);
    /**
     * Private method to init both `start` and `end` to the beginning.
     */
    private setBeginningIndexesPreviews();
    /**
     * Private method to init both `start` and `end` to the end.
     */
    private setEndIndexesPreviews();
    /**
     * Private method to update both `start` and `end` based on the currentImage.
     */
    private setIndexesPreviews();
    /**
     * Private method to update the visible previews navigating to the right (next).
     */
    private next();
    /**
     * Private method to update the visible previews navigating to the left (previous).
     */
    private previous();
    /**
     * Private method to block/permit sliding between previews.
     * @param {number} boundaryIndex is the first or the last index of `images` input array
     * @returns {boolean} if true block sliding, otherwise not
     */
    private isPreventSliding(boundaryIndex);
}
