import { entrys as InputEntrys, both as inputCell, preview as inputPreview } from 'weui-input-cell';
import { entrys as weuiButtonEntrys, both as weuiButton, preview as buttonPreview } from 'weui-button';
import { entrys as weuiBadgeEntrys, both as weuiBadge, preview as badgePreview } from 'weui-badge';
import { entrys as weuiFlexEntrys, both as weuiFlex, preview as flexPreview } from 'weui-flex';
import { entrys as weuiGridsEntrys, both as weuiGrids, preview as gridsPreview } from 'weui-grids';
import { entrys as locpickerEntrys, both as locpickerGrids, preview as locpickerPreview } from 'weui-locpicker';
import { entrys as lgeolocationEntrys, both as lgeolocationGrids, preview as geolocationPreview } from 'weui-geolocation';
import { entrys as imageEntrys, both as imageGrids, preview as imagePreview } from 'weui-image';
import { entrys as swiperEntrys, both as swiperGrids, preview as swiperPreview } from 'weui-swiper';

export const bothss = [
    inputCell,
    weuiButton,
    weuiBadge,
    weuiFlex,
    weuiGrids,
    locpickerGrids,
    lgeolocationGrids,
    imageGrids,
    swiperGrids
];

export const previewss = {
    inputPreview,
    buttonPreview,
    badgePreview,
    flexPreview,
    gridsPreview,
    locpickerPreview,
    geolocationPreview,
    imagePreview,
    swiperPreview,
};

export const entryss = [
    ...InputEntrys,
    ...weuiButtonEntrys,
    ...weuiBadgeEntrys,
    ...weuiFlexEntrys,
    ...weuiGridsEntrys,
    ...locpickerEntrys,
    ...lgeolocationEntrys,
    ...imageEntrys,
    ...swiperEntrys
];
