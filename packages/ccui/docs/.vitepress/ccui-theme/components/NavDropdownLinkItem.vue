<script setup lang="ts">
import { toRefs } from 'vue'
import type { DefaultTheme } from '../config'
import { useNavLink } from '../composables/navLink'
import OutboundLink from './icons/OutboundLink.vue'

const props = defineProps<{
  item: DefaultTheme.NavItemWithLink
}>()

const propsRefs = toRefs(props)

const { props: linkProps, isExternal } = useNavLink(propsRefs.item)
</script>

<template>
  <div class="nav-dropdown-link-item">
    <a class="item" v-bind="linkProps">
      <span class="arrow" />
      <span class="text">{{ item.text }}</span>
      <span class="icon"><OutboundLink v-if="isExternal" /></span>
    </a>
  </div>
</template>

<style scoped lang="scss">
// @import '@ccui/style-var/index.scss';
@import '../../../../ui/style-var/index.scss';

.item {
  display: block;
  padding: 0 1.5rem 0 2.5rem;
  line-height: 32px;
  font-size: 0.9rem;
  font-weight: 500;
  color: $ccui-text;
  white-space: nowrap;
}

@media (min-width: 720px) {
  .item {
    padding: 0 24px 0 12px;
    line-height: 32px;
    font-size: 0.85rem;
    font-weight: 500;
    color: $ccui-text;
    white-space: nowrap;
  }

  .item.active .arrow {
    opacity: 1;
  }
}

.item:hover,
.item.active {
  text-decoration: none;
  color: $ccui-brand;
}

.item.external:hover {
  border-bottom-color: transparent;
  color: $ccui-text;
}

@media (min-width: 720px) {
  .arrow {
    display: inline-block;
    margin-right: 8px;
    border-top: 6px solid #ccc;
    border-right: 4px solid transparent;
    border-bottom: 0;
    border-left: 4px solid transparent;
    vertical-align: middle;
    opacity: 0;
    transform: translateY(-2px) rotate(-90deg);
  }
}
</style>
