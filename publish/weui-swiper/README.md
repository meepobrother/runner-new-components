```ts
import { WeuiSwiperPreviewComponent } from './weui-swiper-preview/weui-swiper-preview';
import { WeuiSwiperSettingComponent } from './weui-swiper-setting/weui-swiper-setting';

import { WeuiSwiperItemPreviewComponent } from './weui-swiper-item-preview/weui-swiper-item-preview';
import { WeuiSwiperItemSettingComponent } from './weui-swiper-item-setting/weui-swiper-item-setting';

export const both = {
    'weui-swiper': {
        setting: WeuiSwiperSettingComponent,
        view: WeuiSwiperPreviewComponent
    },
    'weui-swiper-item': {
        setting: WeuiSwiperItemSettingComponent,
        view: WeuiSwiperItemPreviewComponent
    }
};

export const preview = {
    'weui-swiper': WeuiSwiperPreviewComponent,
    'weui-swiper-item': WeuiSwiperItemPreviewComponent
};

export const entrys = [
    WeuiSwiperSettingComponent,
    WeuiSwiperPreviewComponent,
    WeuiSwiperItemSettingComponent,
    WeuiSwiperItemPreviewComponent
];

export { WeuiSwiperProps } from './weui-swiper-preview/weui-swiper-preview';
export { WeuiSwiperItemProps } from './weui-swiper-item-preview/weui-swiper-item-preview';

```