import { Theme } from './theme';
export const ccuiLightTheme: Theme = new Theme({
  id: 'ccui-light-theme',
  name: 'Light Mode',
  cnName: '浅色主题',
  data: {
    // 基础变量
    'ccui-global-bg': '#f3f6f8',
    'ccui-glass-morphism-bg': 'rgba(245, 246, 248,0.9)',
    'ccui-global-bg-normal': '#ffffff',
    'ccui-base-bg': '#ffffff',
    'ccui-base-bg-dark': '#333854',
    'ccui-brand': '#5e7ce0',
    'ccui-brand-foil': '#859bff',
    'ccui-brand-hover': '#7693f5',
    'ccui-brand-active': '#526ecc',
    'ccui-brand-active-focus': '#344899',
    'ccui-contrast': '#c7000b',
    'ccui-text': '#252b3a',
    'ccui-text-weak': '#575d6c',
    'ccui-aide-text': '#8a8e99',
    'ccui-aide-text-hover': '#252b3a',
    'ccui-aide-text-stress': '#575d6c',
    'ccui-placeholder': '#8a8e99',
    'ccui-light-text': '#ffffff',
    'ccui-dark-text': '#252b3a',
    'ccui-link': '#526ecc',
    'ccui-link-active': '#344899',
    'ccui-link-light': '#96adfa',
    'ccui-link-light-active': '#beccfa',
    'ccui-line': '#adb0b8',
    'ccui-dividing-line': '#dfe1e6',
    'ccui-block': '#ffffff',
    'ccui-area': '#f8f8f8',
    'ccui-danger': '#f66f6a',
    'ccui-warning': '#fac20a',
    'ccui-waiting': '#9faad7',
    'ccui-success': '#50d4ab',
    'ccui-info': '#5e7ce0',
    'ccui-initial': '#e9edfa',
    'ccui-unavailable': '#f5f5f6',
    'ccui-shadow': 'rgba(37, 43, 58, 0.24)',
    'ccui-light-shadow': 'rgba(37, 43, 58, 0.12)',
    'ccui-connected-overlay-shadow': 'rgba(37, 43, 58, 0.16)',
    'ccui-feedback-overlay-shadow': 'rgba(37, 43, 58, 0.2)',
    // 图标
    'ccui-icon-text': '#252b3a',
    'ccui-icon-bg': '#ffffff',
    'ccui-icon-fill': '#252b3a',
    'ccui-icon-fill-weak': '#babbc0',
    'ccui-icon-fill-hover': '#5e7ce0',
    'ccui-icon-fill-active': '#5e7ce0',
    'ccui-icon-fill-active-hover': '#526ecc',
    'ccui-shape-icon-fill': '#d7d8da',
    'ccui-shape-icon-fill-active': '#babbc0',
    'ccui-shape-icon-fill-hover': '#babbc0',
    'ccui-shape-icon-fill-disabled': '#f5f5f5',
    // 表单
    'ccui-form-control-line': '#adb0b8',
    'ccui-form-control-bg': '#ffffff',
    'ccui-form-control-line-hover': '#575d6c',
    'ccui-form-control-line-active': '#5e7ce0',
    'ccui-form-control-interactive-outline': 'rgba(94,124,224,0.08)',
    'ccui-form-control-line-active-hover': '#344899',
    'ccui-list-item-active-bg': '#5e7ce0',
    'ccui-list-item-active-text': '#ffffff',
    'ccui-list-item-active-hover-bg': '#526ecc',
    'ccui-list-item-hover-bg': '#f2f5fc',
    'ccui-list-item-hover-text': '#526ecc',
    'ccui-list-item-selected-bg': '#e9edfa',
    'ccui-list-item-strip-bg': '#f2f5fc',
    // 禁用
    'ccui-disabled-bg': '#f5f5f6',
    'ccui-disabled-line': '#dfe1e6',
    'ccui-disabled-text': '#adb0b8',
    'ccui-primary-disabled': '#beccfa',
    'ccui-icon-fill-active-disabled': '#beccfa',
    // 特殊背景色
    'ccui-label-bg': '#eef0f5',
    'ccui-connected-overlay-bg': '#ffffff',
    'ccui-connected-overlay-line': '#526ecc',
    'ccui-fullscreen-overlay-bg': '#ffffff',
    'ccui-feedback-overlay-bg': '#464d6e',
    'ccui-feedback-overlay-text': '#dfe1e6',
    'ccui-embed-search-bg': '#f2f5fc',
    'ccui-embed-search-bg-hover': '#eef0f5',
    'ccui-float-block-shadow': 'rgba(94, 124, 224, 0.3)',
    'ccui-highlight-overlay': 'rgba(255, 255, 255, 0.8)',
    'ccui-range-item-hover-bg': '#e9edfa',
    // 按钮
    'ccui-primary': '#5e7ce0',
    'ccui-primary-hover': '#7693f5',
    'ccui-primary-active': '#344899',
    'ccui-contrast-hover': '#d64a52',
    'ccui-contrast-active': '#b12220',
    // 状态
    'ccui-danger-line': '#f66f6a',
    'ccui-danger-bg': '#ffeeed',
    'ccui-warning-line': '#fa9841',
    'ccui-warning-bg': '#fff3e8',
    'ccui-info-line': '#5e7ce0',
    'ccui-info-bg': '#f2f5fc',
    'ccui-success-line': '#50d4ab',
    'ccui-success-bg': '#edfff9',
    'ccui-primary-line': '#5e7ce0',
    'ccui-primary-bg': '#f2f5fc',
    'ccui-default-line': '#5e7ce0',
    'ccui-default-bg': '#f3f6f8',
    // 字体设置相关
    'ccui-font-size': '12px',
    'ccui-font-size-card-title': '14px',
    'ccui-font-size-page-title': '16px',
    'ccui-font-size-modal-title': '18px',
    'ccui-font-size-price': '20px',
    'ccui-font-size-data-overview': '24px',
    'ccui-font-size-icon': '16px',
    'ccui-font-size-sm': '12px',
    'ccui-font-size-md': '12px',
    'ccui-font-size-lg': '14px',
    'ccui-font-title-weight': 'bold',
    'ccui-font-content-weight': 'normal',
    'ccui-line-height-base': '1.5',
    // 圆角
    'ccui-border-radius': '2px',
    'ccui-border-radius-feedback': '4px',
    'ccui-border-radius-card': '6px',
    'ccui-border-radius-full': '100px',
    // 阴影
    'ccui-shadow-length-base': '0 2px 6px 0',
    'ccui-shadow-length-slide-left': '-2px 0 8px 0',
    'ccui-shadow-length-slide-right': '2px 0 8px 0',
    'ccui-shadow-length-connected-overlay': '0 2px 12px 0',
    'ccui-shadow-length-hover': '0 4px 16px 0',
    'ccui-shadow-length-feedback-overlay': '0 8px 16px 0',
    'ccui-shadow-length-fullscreen-overlay': '0 10px 24px 0',
    // 动效
    'ccui-animation-ease-in-smooth': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    'ccui-animation-duration-slow': '300ms',
    'ccui-animation-duration-base': '200ms',
    'ccui-animation-duration-fast': '100ms',
    'ccui-animation-ease-in': 'cubic-bezier(0.5, 0, 0.84, 0.25)',
    'ccui-animation-ease-out': 'cubic-bezier(0.16, 0.75, 0.5, 1)',
    'ccui-animation-ease-in-out': 'cubic-bezier(0.5, 0.05, 0.5, 0.95)',
    'ccui-animation-ease-in-out-smooth': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    'ccui-animation-linear': 'cubic-bezier(0, 0, 1, 1)',
    // zIndex
    'ccui-z-index-full-page-overlay': '1080',
    'ccui-z-index-pop-up': '1060',
    'ccui-z-index-dropdown': '1052',
    'ccui-z-index-modal': '1050',
    'ccui-z-index-drawer': '1040',
    'ccui-z-index-framework': '1000',

    // Menu
    'ccui-menu-item': '#252b3a',
    'ccui-menu-item-sub': '#6C6C6C',
    'ccui-menu-item-hover': '#0f0f0f',
    'ccui-menu-disabled': '#919191',

    'ccui-icon-active-color': '#ffffff',
    'ccui-gray-form-control-bg': '#f5f5f5',
    'ccui-gray-form-control-hover-bg': '#ebebeb'
  },
  isDark: false
});
export const ccuiGreenTheme: Theme = new Theme({
  id: 'ccui-green-theme',
  name: 'Green - Light Mode',
  cnName: '绿色主题',
  data: {
    ...ccuiLightTheme.data,
    'ccui-global-bg': '#f3f8f7',
    'ccui-brand': '#3DCCA6',
    'ccui-brand-foil': '#7fdac1',
    'ccui-brand-hover': '#6DDEBB',
    'ccui-brand-active': '#07c693',
    'ccui-brand-active-focus': '#369676',
    'ccui-link': '#07c693',
    'ccui-link-active': '#07c693',
    'ccui-link-light': '#96fac8',
    'ccui-link-light-active': '#befade',
    'ccui-info': '#079CCD',
    'ccui-initial': '#CCCCCC',
    'ccui-icon-fill-active': '#3DCCA6',
    'ccui-icon-fill-active-hover': '#07c693',
    'ccui-form-control-line-active': '#3DCCA6',
    'ccui-form-control-line-active-hover': '#2EB28A',
    'ccui-list-item-active-bg': '#3DCCA6',
    'ccui-list-item-active-hover-bg': '#07c693',
    'ccui-list-item-hover-bg': '#f3fef9',
    'ccui-list-item-hover-text': '#07c693',
    'ccui-list-item-selected-bg': '#f3fef9',
    'ccui-list-item-strip-bg': '#f3fef9',
    'ccui-connected-overlay-line': '#07c693',
    'ccui-embed-search-bg': '#f3fef9',
    'ccui-float-block-shadow': 'rgba(94, 224, 181, 0.3)',
    'ccui-primary': '#3DCCA6',
    'ccui-primary-hover': '#6DDEBB',
    'ccui-primary-active': '#369676',
    'ccui-info-line': '#0486b1',
    'ccui-info-bg': '#e3f0f5',
    'ccui-success-line': '#50d492',
    'ccui-success-bg': '#edfff9',
    'ccui-primary-line': '#3DCCA6',
    'ccui-primary-bg': '#f3fef9',
    'ccui-default-line': '#3DCCA6',
    'ccui-default-bg': '#f3f8f7',
    'ccui-primary-disabled': '#c5f0e5',
    'ccui-icon-fill-active-disabled': '#c5f0e5',
    'ccui-range-item-hover-bg': '#d8f9ea'
  },
  extends: 'ccui-light-theme',
  isDark: false
});
export const ccuiDarkTheme: Theme = new Theme({
  id: 'ccui-dark-theme',
  name: 'Dark Mode',
  cnName: '深色主题',
  data: {
    ...ccuiLightTheme.data,
    'ccui-global-bg': '#202124',
    'ccui-glass-morphism-bg': 'rgba(32,33,36,0.9)',
    'ccui-global-bg-normal': '#202124',
    'ccui-base-bg': '#2E2F31',
    'ccui-base-bg-dark': '#2e2f31',
    'ccui-brand': '#5e7ce0',
    'ccui-brand-foil': '#313a61',
    'ccui-brand-hover': '#425288',
    'ccui-brand-active': '#526ecc',
    'ccui-brand-active-focus': '#344899',
    'ccui-contrast': '#C7000B',
    'ccui-text': '#E8E8E8',
    'ccui-text-weak': '#A0A0A0',
    'ccui-aide-text': '#909090',
    'ccui-aide-text-hover': '#73788a',
    'ccui-aide-text-stress': '#A0A0A0',
    'ccui-placeholder': '#8A8A8A',
    'ccui-light-text': '#ffffff',
    'ccui-dark-text': '#252b3a',
    'ccui-link': '#526ECC',
    'ccui-link-active': '#344899',
    'ccui-link-light': '#96adfa',
    'ccui-link-light-active': '#beccfa',
    'ccui-line': '#505153',
    'ccui-dividing-line': '#3D3E40',
    'ccui-block': '#606061',
    'ccui-area': '#34363A',
    'ccui-danger': '#f66f6a',
    'ccui-warning': '#fac20a',
    'ccui-waiting': '#5e6580',
    'ccui-success': '#50d4ab',
    'ccui-info': '#5e7ce0',
    'ccui-initial': '#64676e',
    'ccui-unavailable': '#5b5b5c',
    'ccui-shadow': 'rgba(0, 0, 0, 0.72)',
    'ccui-light-shadow': 'rgba(0, 0, 0, 0.3)',
    'ccui-connected-overlay-shadow': 'rgba(0, 0, 0, 0.42)',
    'ccui-feedback-overlay-shadow': 'rgba(0, 0, 0, 0.54)',
    // 图标
    'ccui-icon-text': '#E8E8E8',
    'ccui-icon-bg': '#2E2F31',
    'ccui-icon-fill': '#909090',
    'ccui-icon-fill-hover': '#5e7ce0',
    'ccui-icon-fill-active': '#5e7ce0',
    'ccui-icon-fill-active-hover': '#526ecc',
    'ccui-shape-icon-fill': '#5b5d66',
    'ccui-shape-icon-fill-active': '#868a99',
    // 表单
    'ccui-form-control-line': '#505153',
    'ccui-form-control-bg': '#2E2F31',
    'ccui-form-control-line-hover': '#909090',
    'ccui-form-control-line-active': '#5e7ce0',
    'ccui-form-control-interactive-outline': 'rgba(94,124,224,0.08)',
    'ccui-form-control-line-active-hover': '#344899',
    'ccui-list-item-active-bg': '#5e7ce0',
    'ccui-list-item-active-text': '#ffffff',
    'ccui-list-item-active-hover-bg': '#526ecc',
    'ccui-list-item-hover-bg': '#3d3d42',
    'ccui-list-item-hover-text': '#526ecc',
    'ccui-list-item-selected-bg': '#454545',
    'ccui-list-item-strip-bg': '#383838',
    'ccui-table-expand-area-bg': '#393a3e',
    // 禁用
    'ccui-disabled-bg': '#3D3E44',
    'ccui-disabled-line': '#505153',
    'ccui-disabled-text': '#7D7D7D',
    'ccui-primary-disabled': '#2B3458',
    'ccui-icon-fill-active-disabled': '#2B3458',
    // 特殊背景色
    'ccui-label-bg': '#46443F',
    'ccui-connected-overlay-bg': '#2F2F2F',
    'ccui-connected-overlay-line': '#526ecc',
    'ccui-fullscreen-overlay-bg': '#2E2F31',
    'ccui-feedback-overlay-bg': '#4C4C4C',
    'ccui-feedback-overlay-text': '#DFE1E6',
    'ccui-embed-search-bg': '#383838',
    'ccui-embed-search-bg-hover': '#3D3E40',
    'ccui-float-block-shadow': 'rgba(94, 124, 224, 0.3)',
    'ccui-highlight-overlay': 'rgba(255, 255, 255, 0.1)',
    'ccui-range-item-hover-bg': '#454545',
    // 按钮
    'ccui-primary': '#5e7ce0',
    'ccui-primary-hover': '#425288',
    'ccui-primary-active': '#344899',
    'ccui-contrast-hover': '#D64A52',
    'ccui-contrast-active': '#B12220',
    // 状态
    'ccui-danger-line': '#985C5A',
    'ccui-danger-bg': '#4B3A39',
    'ccui-warning-line': '#8D6138',
    'ccui-warning-bg': '#554434',
    'ccui-info-line': '#546BB7',
    'ccui-info-bg': '#383D4F',
    'ccui-success-line': '#5D887D',
    'ccui-success-bg': '#304642',
    'ccui-primary-line': '#546BB7',
    'ccui-primary-bg': '#383D4F',
    'ccui-default-line': '#5e7ce0',
    'ccui-default-bg': '#383838',
    'ccui-icon-active-color': '#ffffff',
    'ccui-gray-form-control-bg': '#323338',
    'ccui-gray-form-control-hover-bg': '#393A3E',

    // Menu
    'ccui-menu-item': '#dcdcdc',
    'ccui-menu-item-sub': '#c6c6c6',
    'ccui-menu-item-hover': '#fff',
    'ccui-menu-disabled': '#919191'
  },
  extends: 'ccui-light-theme',
  isDark: true
});
export const ccuiGreenDarkTheme: Theme = new Theme({
  id: 'ccui-green-dark-theme',
  name: 'Green - Dark Mode',
  cnName: '绿色深色主题',
  data: {
    ...ccuiDarkTheme.data,
    'ccui-brand': '#3DCCA6',
    'ccui-brand-foil': '#395e54',
    'ccui-brand-hover': '#4c9780',
    'ccui-brand-active': '#07c693',
    'ccui-brand-active-focus': '#297058',
    'ccui-link': '#07c693',
    'ccui-link-active': '#08a57b',
    'ccui-info': '#046788',
    'ccui-initial': '#64676e',
    'ccui-icon-fill-active': '#3DCCA6',
    'ccui-icon-fill-active-hover': '#07c693',
    'ccui-form-control-line-active': '#3DCCA6',
    'ccui-form-control-line-active-hover': '#297058',
    'ccui-list-item-active-bg': '#3DCCA6',
    'ccui-list-item-active-hover-bg': '#07c693',
    'ccui-list-item-hover-text': '#07c693',
    'ccui-connected-overlay-line': '#07c693',
    'ccui-embed-search-bg': '#3f4241',
    'ccui-float-block-shadow': 'rgba(94, 224, 181, 0.3)',
    'ccui-primary': '#3DCCA6',
    'ccui-primary-hover': '#6DDEBB',
    'ccui-primary-active': '#369676',
    'ccui-info-line': '#035e7c',
    'ccui-info-bg': '#383c3d',
    'ccui-primary-line': '#3DCCA6',
    'ccui-primary-bg': '#3f4241',
    'ccui-default-line': '#3DCCA6',
    'ccui-default-bg': '#383838',
    'ccui-primary-disabled': '#28544B',
    'ccui-icon-fill-active-disabled': '#28544B'
  },
  extends: 'ccui-dark-theme',
  isDark: true
});
