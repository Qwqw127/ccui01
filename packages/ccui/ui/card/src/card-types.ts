import type { PropType, ExtractPropTypes } from 'vue';

export type ShadowType = PropType<'always' | 'hover' | 'never'>;

export const cardProps = {
  align: {
    type: String as PropType<'start' | 'end' | 'spaceBetween'>,
    default: 'start'
  },
  src: {
    type: String,
    default: ''
  },
  shadow: {
    type: String as ShadowType,
    default: 'always'
  },
  header: {
    type: String,
    default: ''
  },
  bodyStyle: {
    type: Object,
    default: () => {
      return { padding: '20px' };
    }
  }
} as const;

export type CardProps = ExtractPropTypes<typeof cardProps>;
