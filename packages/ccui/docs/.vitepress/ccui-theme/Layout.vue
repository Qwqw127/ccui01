<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  defineAsyncComponent,
  onMounted,
  onUpdated
} from 'vue';
import { useRoute, useData, useRouter } from 'vitepress';
import { isSideBarEmpty, getSideBarConfig } from './support/sideBar';
// components
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import Page from './components/Page.vue';
import { CONTRIBUTORS_MAP } from './components/PageContributorConfig';
import { LANG_KEY, ZH_CN, EN_US } from './const';

const Home = defineAsyncComponent(() => import('./components/Home.vue'));

const NoopComponent = () => null;

const AlgoliaSearchBox = __ALGOLIA__
  ? defineAsyncComponent(() => import('./components/AlgoliaSearchBox.vue'))
  : NoopComponent;

// generic state
const route = useRoute();
const { site, theme, frontmatter } = useData();
const router = useRouter();

// custom layout
const isCustomLayout = computed(() => !!frontmatter.value.customLayout);
// home
const enableHome = computed(() => !!frontmatter.value.home);

// automatic multilang check for AlgoliaSearchBox
const isMultiLang = computed(
  () => Object.keys(theme.value.locales || {}).length > 0
);

// navbar
const showNavbar = computed(() => {
  const themeConfig = theme.value;
  if (frontmatter.value.navbar === false || themeConfig.navbar === false) {
    return false;
  }
  return (
    site.value.title || themeConfig.logo || themeConfig.repo || themeConfig.nav
  );
});

// sidebar
const openSideBar = ref(false);

const showSidebar = computed(() => {
  if (frontmatter.value.home || frontmatter.value.sidebar === false) {
    return false;
  }

  return !isSideBarEmpty(
    getSideBarConfig(theme.value.sidebar, route.data.relativePath)
  );
});

const toggleSidebar = (to?: boolean) => {
  openSideBar.value = typeof to === 'boolean' ? to : !openSideBar.value;
};

const hideSidebar = toggleSidebar.bind(null, false);
// close the sidebar when navigating to a different location
watch(route, hideSidebar);
// TODO: route only changes when the pathname changes
// listening to hashchange does nothing because it's prevented in router

// page classes
const pageClasses = computed(() => {
  return [
    {
      'no-navbar': !showNavbar.value,
      'sidebar-open': openSideBar.value,
      'no-sidebar': !showSidebar.value
    }
  ];
});
const homeContainerClass = computed(() => {
  return [
    {
      'home-page-bg': enableHome.value
    }
  ];
});
const initLanguageConfig = () => {
  // layout组件加载，初始化国际化语言.
  const result = location.pathname.match(/[a-zA-Z]*-[A-Z]*/);
  const langList = [ZH_CN, EN_US];

  // 避免短横线分隔 (kebab-case）形式的路由命名导致读取语言错误
  if (result && langList.includes(result[0])) {
    localStorage.setItem(LANG_KEY, result[0]);
  } else {
    localStorage.setItem(LANG_KEY, navigator.language);
  }
};

// Remove `__VP_STATIC_START__`
const removeVPStaticFlag = () => {
  const contentChildNodes =
    document.querySelector('.content > div')?.childNodes;

  contentChildNodes?.forEach((item, index) => {
    if (
      (index === 0 && item.textContent === '__VP_STATIC_START__') ||
      (index === contentChildNodes.length - 1 &&
        item.textContent === '__VP_STATIC_END__')
    ) {
      item.remove();
    }
  });
};

const routePath = route.path;
if (routePath.startsWith('/en-US')) {
  const path = routePath.split('/en-US');
  router.go(path[1]);
}

onMounted(() => {
  initLanguageConfig();
  removeVPStaticFlag();
});

onUpdated(() => {
  removeVPStaticFlag();
});

function unique(arr) {
  let map = new Map();
  let array = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i].homepage)) {
      map.set(arr[i].homepage, true);
    } else {
      map.set(arr[i].homepage, false);
      array.push(arr[i]);
    }
  }
  return array;
}

</script>

<template>
  <div :class="homeContainerClass">
    <div class="content-container">
      <div class="theme" :class="pageClasses">
        <NavBar v-if="showNavbar" @toggle="toggleSidebar">
          <template #search>
            <slot name="navbar-search"></slot>
          </template>
        </NavBar>

        <SideBar :open="openSideBar">
          <template #sidebar-top>
            <slot name="sidebar-top" />
            <AlgoliaSearchBox
              v-if="theme.algolia"
              :options="theme.algolia"
              :multilang="isMultiLang"
              :key="site.lang"
            />
          </template>
          <template #sidebar-bottom>
            <slot name="sidebar-bottom" />
          </template>
        </SideBar>
        <!-- TODO: make this button accessible -->
        <div class="sidebar-mask" @click="toggleSidebar(false)" />

        <Content v-if="isCustomLayout" />

        <Home v-else-if="enableHome">
          <template #hero>
            <slot name="home-hero" />
          </template>
          <template #features>
            <slot name="home-features" />
          </template>
          <template #footer>
            <slot name="home-footer" />
          </template>
        </Home>

        <Page v-else/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#ads-container {
  margin: 0 auto;
}

@media (min-width: 420px) {
  #ads-container {
    position: relative;
    right: 0;
    float: right;
    margin: -8px -8px 24px 24px;
    width: 146px;
  }
}

@media (max-width: 420px) {
  #ads-container {
    /* Avoid layout shift */
    height: 105px;
    margin: 1.75rem 0;
  }
}

@media (min-width: 1400px) {
  #ads-container {
    position: fixed;
    right: 8px;
    bottom: 8px;
  }
}

// iPad/PC
.container-contributors {
  padding: 2rem 0;
  margin-bottom: 40px;

  .contributors-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 8px 32px rgba(150, 180, 255, 0.16);

    h2 {
      margin-top: 1rem;
      margin-bottom: 2rem;
      text-align: center;
      font-size: 2rem;
      border: 0;
    }

    img {
      max-width: unset;
    }

    a:hover {
      text-decoration: none;
    }

    .btn-become-contributor {
      margin-top: 1rem;
    }

    .page-contributor {
      padding: 0 20px;
    }
  }
}

.home-page-bg {
  background-image: url('../../assets/banner-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 50%;
  margin-top: 50px;
  background-color: var(--ccui-global-bg-normal);
}

body[ui-theme='galaxy-theme'] {
  .home-page-bg {
    background-image: url('../../assets/banner-bg-dark.png');
  }
}

.content-container {
  min-height: calc(100vh - 214px);
}

// iPhone 6/7/8 Plus(414) Nexus 5X/6/6P(412)
@media (max-width: 420px) {
  .container-contributors .contributors-inner {
    h2 {
      font-size: 1.6rem;
    }

    .page-contributor {
      & > a > span {
        margin: 0 12px 8px 0 !important;

        & > img,
        & svg {
          width: 40px !important;
          height: 40px !important;
        }
      }

      & > a:nth-child(8n) > span {
        margin: 0 12px 8px 0 !important;
      }

      & > a:nth-child(7n) > span {
        margin: 0 !important;
      }
    }
  }
}

// iPhone 6/7/8/X(375) Nexus 4/5(384/360)
@media (max-width: 385px) {
  .container-contributors .contributors-inner {
    .page-contributor {
      & > a:nth-child(7n) > span {
        margin: 0 12px 8px 0 !important;
      }

      & > a:nth-child(6n) > span {
        margin: 0 !important;
      }
    }
  }
}

// iPhone 4/5/SE(320)
@media (max-width: 330px) {
  .container-contributors .contributors-inner {
    .page-contributor {
      & > a:nth-child(6n) > span {
        margin: 0 12px 8px 0 !important;
      }

      & > a:nth-child(5n) > span {
        margin: 0 !important;
      }
    }
  }
}

.footer {
  max-width: 1200px !important;
}
</style>
