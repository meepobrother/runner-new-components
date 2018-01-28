import { WeuiSwiperPreviewComponent } from './weui-swiper-preview/weui-swiper-preview';
import { WeuiSwiperSettingComponent } from './weui-swiper-setting/weui-swiper-setting';
import { WeuiSwiperItemPreviewComponent } from './weui-swiper-item-preview/weui-swiper-item-preview';
import { WeuiSwiperItemSettingComponent } from './weui-swiper-item-setting/weui-swiper-item-setting';
export declare const both: {
    'weui-swiper': {
        setting: typeof WeuiSwiperSettingComponent;
        view: typeof WeuiSwiperPreviewComponent;
    };
    'weui-swiper-item': {
        setting: typeof WeuiSwiperItemSettingComponent;
        view: typeof WeuiSwiperItemPreviewComponent;
    };
};
export declare const preview: {
    'weui-swiper': typeof WeuiSwiperPreviewComponent;
    'weui-swiper-item': typeof WeuiSwiperItemPreviewComponent;
};
export declare const entrys: typeof WeuiSwiperSettingComponent[];
export { WeuiSwiperProps } from './weui-swiper-preview/weui-swiper-preview';
export { WeuiSwiperItemProps } from './weui-swiper-item-preview/weui-swiper-item-preview';
