<script setup lang="ts">
import { watch, ref } from 'vue';
import { useRoute } from 'vitepress';
import PageFooter from './PageFooter.vue';
import NextAndPrevLinks from './NextAndPrevLinks.vue';
import PageToc from './PageToc.vue';
import BackToTop from './BackToTop.vue';

const route = useRoute();
// const isComponents = computed(() => route.path.indexOf('components') > -1);
const isComponents = ref(false);
watch(
  () => route.path,
  (v) => {
    isComponents.value = v.indexOf('components') > -1;
  },
  {
    immediate: true
  }
);
</script>

<template>
  <main class="page">
    <div class="container">
      <!-- 扩展原有主题，需在Content组件上添加默认主题的class vp-doc -->
       <!-- 或者 将相关丢失的样式 添加到现在的主题上 -->
      <Content class="content " />
      <PageFooter />
      <NextAndPrevLinks />
      <BackToTop />
      <PageToc v-if="isComponents" class="toc-warpper" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.page {
  padding-top: var(--header-height);
  height: 100vh;
}

@media (min-width: 720px) {
  .page {
    margin-left: 16.4rem;
    margin-right: 40px;
  }
}

@media (min-width: 960px) {
  .page {
    margin-left: 20rem;
  }
}

.container {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 1024px !important;
  min-height: calc(100% - 196px);
}

.page > .container:first-child {
  max-width: 1064px !important;
  padding: 0 20px 20px 20px !important;
  padding-bottom: 20px;
}

.content {
  padding-bottom: 1.5rem;
}

@media (max-width: 420px) {
  .content {
    /* fix carbon ads display */
    clear: both;
  }
}

.page-contributor-label {
  color: #24292f;
  font-weight: 600;
  line-height: 32px;
}
</style>
