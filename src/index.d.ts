/**
 * Index file to export all interfaces, enums, classes and so on.
 * This file represents the public apis.
 */
export { ModalGalleryModule } from './src/modal-gallery.module';
export { Action } from './src/model/action.enum';
export { Image, PlainImage, ModalImage, ImageModalEvent } from './src/model/image.class';
export { Description, DescriptionStrategy } from './src/model/description.interface';
export { KeyboardConfig } from './src/model/keyboard-config.interface';
export { DotsConfig } from './src/model/dots-config.interface';
export { PreviewConfig } from './src/model/preview-config.interface';
export { AccessibilityConfig } from './src/model/accessibility.interface';
export { Size } from './src/model/size.interface';
export { ButtonsConfig, ButtonsStrategy, ButtonType, ButtonEvent } from './src/model/buttons-config.interface';
export { GalleryService } from './src/services/gallery.service';
export { CurrentImageConfig } from './src/model/current-image-config.interface';
export { KS_DEFAULT_ACCESSIBILITY_CONFIG } from './src/components/accessibility-default';
export { KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE, KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_SIZE } from './src/components/upper-buttons/upper-buttons-default';
export { PlainGalleryConfig, PlainGalleryLayout, LineLayout, GridLayout, AdvancedLayout, PlainGalleryStrategy, BreakConfig } from './src/model/plain-gallery-config.interface';
