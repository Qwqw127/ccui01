<script setup lang="ts">
import '@docsearch/css';
import type { DefaultTheme } from '../config';
import docsearch from '@docsearch/js';
import { onMounted } from 'vue';
import { useRouter, useRoute, useData } from 'vitepress';

const router = useRouter();
const route = useRoute();
const { theme, site } = useData();

onMounted(() => {
  initialize(theme.value.algolia);
  // setTimeout(poll, 16)
});

function poll() {
  // programmatically open the search box after initialize
  const e = new Event('keydown') as any;

  e.key = 'k';
  e.metaKey = true;

  window.dispatchEvent(e);

  setTimeout(() => {
    if (!document.querySelector('.DocSearch-Modal')) {
      poll();
    }
  }, 16);
}

const docsearch$ = docsearch;
type DocSearchProps = Parameters<typeof docsearch$>[0];

function initialize(userOptions: DefaultTheme.AlgoliaSearchOptions) {
  // note: multi-lang search support is removed since the theme
  // doesn't support multiple locales as of now.
  const options = Object.assign<{}, {}, DocSearchProps>({}, userOptions, {
    container: '#docsearch',
    appId: 'HOQD3NUZNM',
    apiKey: '07456b4a262e8c84eb892088e5cc3791',
    indexName: 'vue-devui',

    navigator: {
      navigate({ itemUrl }) {
        const _itemUrl = itemUrl.replaceAll('//', '/');
        const { pathname: hitPathname } = new URL(
          window.location.origin + _itemUrl
        );

        // router doesn't handle same-page navigation so we use the native
        // browser location API for anchor navigation
        if (route.path === hitPathname) {
          window.location.assign(window.location.origin + _itemUrl);
        } else {
          router.go(_itemUrl);
        }
      }
    },

    transformItems(items) {
      return items.map((item) => {
        return Object.assign({}, item, {
          url: getRelativePath(item.url)
        });
      });
    },

    hitComponent({ hit, children }) {
      return {
        __v: null,
        type: 'a',
        ref: undefined,
        constructor: undefined,
        key: undefined,
        props: { href: hit.url, children }
      };
    }
  });

  docsearch$(options);
}

function getRelativePath(absoluteUrl: string) {
  const { pathname, hash } = new URL(absoluteUrl);
  return (
    pathname.replace(
      /\.html$/,
      site.value.cleanUrls === 'disabled' ? '.html' : ''
    ) + hash
  );
}
</script>

<template>
  <div id="docsearch" />
</template>

<style lang="scss">
.DocSearch {
  --docsearch-key-gradient: var(--ccui-brand);
  --docsearch-key-shadow: red;

  --docsearch-primary-color: var(--c-brand);
  --docsearch-highlight-color: var(--ccui-brand);
  --docsearch-searchbox-shadow: inset 0 0 0 1px
    var(--ccui-form-control-line-active);
  --docsearch-text-color: var(--ccui-text);
  --docsearch-muted-color: var(--ccui-text);
  --docsearch-searchbox-background: var(--ccui-global-bg);

  --docsearch-modal-background: var(--ccui-global-bg-normal);
  --docsearch-footer-background: var(--ccui-global-bg);
  --docsearch-searchbox-focus-background: var(
    --ccui-gray-form-control-hover-bg
  );
  --docsearch-hit-background: var(--ccui-default-bg);
  --docsearch-footer-shadow: '';
  --docsearch-hit-shadow: '';

  .DocSearch-Commands-Key,
  .DocSearch-Button-Key {
    color: var(--ccui-light-text);
  }

  .DocSearch-Hit-action,
  .DocSearch-Hit-icon,
  .DocSearch-Hit-path,
  .DocSearch-Hit-text,
  .DocSearch-Hit-title {
    color: var(--ccui-text-weak);
  }
}

#docsearch {
  padding: 16px 12px 16px 8px;
}

.DocSearch-Button {
  width: 100%;
  margin: 0;
  border-radius: var(--ccui-border-radius-full);
}

.DocSearch-Button-Placeholder {
  color: var(--ccui-placeholder);
}

.DocSearch-Button-Keys {
  display: none;
}
</style>
