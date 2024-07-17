import cssVars from 'css-vars-ponyfill';
import { Subscription } from 'rxjs';
import { THEME_KEY } from './key-config';
import { Theme } from './theme';
import { ccuiDarkTheme, ccuiLightTheme } from './theme-data';
import { ThemeService } from './theme-service';
import { EventBus } from './utils';

/**
 * usage
 * main.ts
 ```ts
 import { ThemeServiceInit } from 'ccui-theme';
 ThemeServiceInit();
 ```
 *
*/
export function ThemeServiceInit(
  themes?: { [themeName: string]: Theme },
  defaultThemeName?: string,
  extraData?: {
    [themeName: string]: {
      appendClasses?: Array<string>;
      cssVariables?: {
        [cssVarName: string]: string;
      };
    };
  },
  ieSupport = false, // TODO：css-var-ponyflll 仍有一些问题待定位
  allowDynamicTheme = false
) {
  if (typeof window === 'undefined') {
    return null;
  }

  window[THEME_KEY.themeCollection] = themes || {
    'ccui-light-theme': ccuiLightTheme,
    'ccui-dark-theme': ccuiDarkTheme
  };
  window[THEME_KEY.currentTheme] = defaultThemeName || 'ccui-light-theme';
  const eventBus = window['globalEventBus'] || new EventBus(); // window.globalEventBus 为 框架的事件总线
  const themeService = new ThemeService(eventBus);
  window[THEME_KEY.themeService] = themeService;

  themeService.setExtraData(
    extraData || {
      'ccui-dark-theme': {
        appendClasses: ['dark-mode']
      }
    }
  );
  themeService.initializeTheme(null, allowDynamicTheme);
  if (ieSupport) {
    ieSupportCssVar();
  }
  return themeService;
}

export function ThemeServiceFollowSystemOn(themeConfig?: {
  lightThemeName: string;
  darkThemeName: string;
}): Subscription {
  if (typeof window === 'undefined') {
    return null;
  }

  const themeService: ThemeService = window[THEME_KEY.themeService];
  themeService.registerMediaQuery();
  return themeService.mediaQuery.prefersColorSchemeChange.subscribe((value) => {
    if (value === 'dark') {
      themeService.applyTheme(
        window[THEME_KEY.themeCollection][
          (themeConfig && themeConfig.darkThemeName) || 'ccui-dark-theme'
        ]
      );
    } else {
      themeService.applyTheme(
        window[THEME_KEY.themeCollection][
          (themeConfig && themeConfig.lightThemeName) || 'ccui-light-theme'
        ]
      );
    }
  });
}
export function ThemeServiceFollowSystemOff(sub?: Subscription) {
  if (typeof window === 'undefined') {
    return null;
  }

  if (sub) {
    sub.unsubscribe();
  }
  const themeService = window[THEME_KEY.themeService];
  themeService.unregisterMediaQuery();
}

export function ieSupportCssVar() {
  if (typeof window === 'undefined') {
    return null;
  }

  const isNativeSupport =
    (window['CSS'] && CSS.supports && CSS.supports('(--a: 0)')) || false;
  if (isNativeSupport) {
    return;
  }
  cssVars({ watch: true, silent: true });
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      cssVars({ watch: false, silent: true });
      cssVars({ watch: true, silent: true });
    });
  });

  const config = {
    attributes: true,
    attributeFilter: [THEME_KEY.uiThemeAttributeName]
  };

  observer.observe(
    document.querySelector(`#${THEME_KEY.styleElementId}`),
    config
  );
}

// TODO: management should handle add / remove theme from theme collection.
// TODO: move global variables（window.xxxx） to single namespace
