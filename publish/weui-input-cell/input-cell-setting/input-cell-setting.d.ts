import { KeyValueDiffers, ElementRef, Renderer2 } from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export declare class InputCellSettingComponent extends ReactComponent<any, any> {
    mouseover(): void;
    mouseleave(): void;
    constructor(_differs: KeyValueDiffers, _ele: ElementRef, _render: Renderer2);
    onPropsChange(): void;
    onStateChange(): void;
}
