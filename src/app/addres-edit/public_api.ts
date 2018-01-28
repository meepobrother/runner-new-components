import { AddressEditPreviewComponent } from './address-edit-preview/address-edit-preview';
import { AddressEditSettingComponent } from './address-edit-setting/address-edit-setting';

export const both = {
    'address-edit': {
        setting: AddressEditSettingComponent,
        preview: AddressEditPreviewComponent
    }
};

export const preview = {
    'address-edit': AddressEditPreviewComponent
};

export const entrys = [
    AddressEditPreviewComponent,
    AddressEditSettingComponent
];

