<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue';

interface IThemeItem {
  label: string;
  value: string;
  image: string;
  color?: string;
  active?: boolean;
}

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: 'infinity-theme'
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const themeData = ref<Array<IThemeItem>>([
      {
        label: '无限',
        value: 'infinity-theme',
        image:
          'data:image/png;base64,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',
        color: 'rgb(37, 43, 58)',
        active: true
      },
      {
        label: '蜜糖',
        value: 'sweet-theme',
        image:
          'data:image/png;base64,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'
      },
      {
        label: '紫罗兰',
        value: 'provence-theme',
        image:
          'data:image/png;base64,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'
      },
      {
        label: '深邃夜空',
        value: 'deep-theme',
        image:
          'data:image/png;base64,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'
      },
      {
        label: '追光',
        value: 'galaxy-theme',
        image:
          'data:image/png;base64,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'
      }
    ]);

    const initActiveTheme = (theme: string) => {
      themeData.value.forEach((item: IThemeItem) => {
        item.active = false;

        if (item.value === theme) {
          item.active = true;
        }
      });
    };

    initActiveTheme(modelValue.value);

    watch(modelValue, (newVal) => {
      initActiveTheme(newVal);
    });

    const changeTheme = (theme: string) => {
      emit('update:modelValue', theme);
    };

    return {
      themeData,
      changeTheme
    };
  }
});
</script>

<template>
  <div>
    <div
      v-for="themeItem of themeData"
      :key="themeItem.value"
      class="extend-theme-image"
      :style="{
        backgroundImage: `url(${themeItem.image})`
      }"
      @click="changeTheme(themeItem.value)"
    >
      <span class="extend-theme-title" :style="{ color: themeItem.color }">
        {{ themeItem.label }}
      </span>
      <i v-if="themeItem.active" class="icon-right active-theme"></i>
    </div>
    <!-- </d-dropdown> -->
  </div>
</template>

<style scoped lang="scss">
@import '@ccui/style-var/index.scss';

.theme-picker__dropdown-menu {
  width: 176px;
  margin: 12px 16px;
}

.extend-theme-image {
  background-repeat: no-repeat;
  height: 40px;
  margin-bottom: 8px;
  border-radius: $ccui-border-radius;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  .extend-theme-title {
    margin: 0 8px;
    color: $ccui-light-text;
  }

  .active-theme {
    color: $ccui-light-text;
    margin-right: 8px;
    background-color: $ccui-brand;
    border-radius: 50%;
    opacity: 0.6;
    padding: 4px;
  }
}

.icon-theme:hover {
  path {
    fill: $ccui-brand;
  }
}

.theme-svg {
  margin-top: 6px;
}
</style>
